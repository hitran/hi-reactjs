import React from 'react';
import firebase from 'firebase';
import {Redirect, Route} from 'react-router-dom';

export default function PrivateRoute({children, ...restProps}) {
    //const renderChildren = firebase.auth().currentUser ? children : <Redirect to="/login"/>
    const renderChildren = children
    return (
        <Route {...restProps}>
            {renderChildren}
        </Route>
    )
}