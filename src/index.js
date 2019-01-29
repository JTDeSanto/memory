import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { configureStore } from 'redux-starter-kit';
import { createStore } from 'redux';
import { takeItDown } from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function configureStore({
//     // A single reducer function that will be used as the root reducer,
//     // or an object of slice reducers that will be passed to combineReducers()
//     reducer: {state, ReducerFunction},
//     // An array of Redux middlewares.  If not supplied, uses getDefaultMiddleware()
//    // middleware: MiddlewareFunction[],
//     // Enable support for the Redux DevTools Extension. Defaults to true.
//     devTools?: true,
//     // Same as current createStore.
//     preloadedState?: state
// }) 

const store = createStore(takeItDown)

console.log(store);


ReactDOM.render(
  <Provider store={store}>
  <App />
   </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
