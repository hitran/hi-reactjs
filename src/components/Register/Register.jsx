import React, {useState} from 'react';
import firebase from 'firebase';


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onRegister = async(e) => {
        e.preventDefault();
        console.log({email: email, password: password});
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main>
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Register</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>Register</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Signup From Here</h3>
                                <form onSubmit={onRegister}>
                                    {/* <label htmlFor="name">Username <span>**</span></label>
                                    <input id="name" type="text" placeholder="Enter Username or Email address..." /> */}
                                    <label htmlFor="email-id">Email Address <span>**</span></label>
                                    <input onChange={onEmailChange} value={email} id="email-id" type="text" placeholder="Enter Username or Email address..." />
                                    <label htmlFor="pass">Password <span>**</span></label>
                                    <input onChange={onPasswordChange} value={password} id="pass" type="password" placeholder="Enter password..." />
                                    <div className="mt-10" />
                                    <button type="submit" className="btn theme-btn-2 w-100">Register Now</button>
                                    <div className="or-divide"><span>or</span></div>
                                    <button type="button" className="btn theme-btn w-100">login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};