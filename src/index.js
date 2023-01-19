import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 
import { legacy_createStore as createStore } from 'redux';
import {Provider} from 'react-redux'
// import rootReducer from './service/reducers/index'
import rootReducer from './service/reducers/Reducers'
const store=createStore(rootReducer)
console.log("stroe data",store)
// 

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
