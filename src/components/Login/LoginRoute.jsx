import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import {Redirect, Route} from 'react-router-dom';

export default function LoginRoute({children, ...restProps}) {
    const renderChildren = firebase.auth().currentUser ? <Redirect to="/"/> : <Login/>
    return (
        <Route {...restProps}>
            {renderChildren}
        </Route>
    )
}