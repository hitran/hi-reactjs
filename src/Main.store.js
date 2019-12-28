import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import productListReducer from './components/ProductList/ProductList.reducer';
import productDetailReducer from './components/ProductDetail/ProductDetail.reducer';
import registerReducer from './components/Register/Register.reducer';
import loginReducer from './components/Login/Login.reducer';
import shoppingCartReducer from './components/ShoppingCart/ShoppingCart.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ 
    productListReducer, 
    productDetailReducer, 
    registerReducer, 
    loginReducer,
    shoppingCartReducer
});

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
  const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      throw err
    }
  }
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, logger, crashReporter),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
