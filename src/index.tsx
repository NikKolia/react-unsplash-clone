import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './store';
import { App } from './App';

console.log(process.env, process.env.ENV);

import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  devToolsEnhancer({
      features: {
          pause: true, // start/pause recording of dispatched actions
          lock: true, // lock/unlock dispatching actions and side effects
          persist: true, // persist states on page reloading
          export: true, // export history of actions in a file
          import: 'custom', // import history of actions from a file
          jump: true, // jump back and forth (time travelling)
          skip: true, // skip (cancel) actions
          reorder: true, // drag and drop actions in the history list
          dispatch: true, // dispatch custom actions or action creators
          test: true // generate tests for the selected actions
      },
      // other options like actionSanitizer, stateSanitizer
  })
));

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
