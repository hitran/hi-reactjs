import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search.Container';
import firebase from 'firebase'

function Header(props) {
    const [userInfo, setUserInfo] = useState({});

    // listen to changes in authentication state
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUserInfo(user);
        }
    });

    // log out
    const onLogOut = async () => {
        await firebase.auth().signOut();
        window.location.href = "/";
    }
    return (
        <header>
            <div id="header-sticky" className="header-area box-90 sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                            <div className="logo">
                                <Link to={"/"}><img src="./assets/logo_shop.png" alt="" /></Link>
                            </div>
                            <div className="category-menu">
                                <h4>Category</h4>
                                <ul>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Men</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Women</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu" style={{ display: "block" }}>
                                    <ul>
                                        <li>
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="./detail.html">Product Detail</a>
                                                </li>
                                                <li>
                                                    <Link to="/login">Login</Link>
                                                </li>
                                                <li>
                                                    <Link to="/register">Register</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shopping-cart">Shoping Cart</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Search />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                            <div className="header-right f-right">
                                <ul>
                                    {
                                        userInfo && userInfo.email
                                            ? <li onClick={onLogOut} className="login-btn"><a href="#"><i className="fas fa-sign-out-alt"></i></a></li>
                                            : <li className="login-btn"><a href="#"><i className="far fa-user"></i></a></li>
                                    }
                                    <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i>
                                        <span className="cart-count">
                                            {props.totalItems}
                                        </span></a>
                                        {props.children}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 d-xl-none">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;