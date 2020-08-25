import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getContacts from './actions/getContacts'

const store = configureStore();
store.dispatch(getContacts())

ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider >
  
  ,  document.getElementById('root')

);


