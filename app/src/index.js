// libraries

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//redux

import thunk from 'redux-thunk';
import missonReducer from './store/reducers';
import logger from 'redux-logger';

//component
import App from './App';

//stylesheet
import './index.css';

const store = createStore(missonReducer, applyMiddleware(thunk, logger));
store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
