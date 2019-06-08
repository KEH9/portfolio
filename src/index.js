/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css';
import App from './App';
import reducer from './reducers/index';

import * as serviceWorker from './serviceWorker';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render((
  <ParallaxProvider>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </ParallaxProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
