import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase';
import Context from './components/DataContext/DataContext';
import { Provider } from 'react-redux';
import { store } from './Main.store';

firebaseInit();
ReactDOM.render(
    <Context>
        <Provider store={store}>
            <Main />
        </Provider>
    </Context>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
