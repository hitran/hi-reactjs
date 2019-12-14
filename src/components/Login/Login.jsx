import React, { useState } from 'react';
import firebase from 'firebase';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const onLogin = async (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      {/* breadcrumb-area-start */}
      <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Login</h1>
                <ul className="breadcrumb-menu">
                  <li><a href="index.html">home</a></li>
                  <li><span>Login</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* login Area Strat*/}
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <form onSubmit={onLogin}>
                  <label htmlFor="name">Email Address <span>**</span></label>
                  <input onChange={onEmailChange} value={email} id="name" type="text" placeholder="Enter Username or Email address..." />
                  <label htmlFor="pass">Password <span>**</span></label>
                  <input onChange={onPasswordChange} value={password} id="pass" type="password" placeholder="Enter password..." />
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>
                  <button type="submit" className="btn theme-btn-2 w-100">Login Now</button>
                  <div className="or-divide"><span>or</span></div>
                  <button type="button" className="btn theme-btn w-100">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* login Area End*/}
    </main>
  )
}