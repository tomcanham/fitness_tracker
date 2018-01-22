import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const History = createHistory();

const middleware = applyMiddleware(thunk);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__() :
  f => f;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
  combineReducers(reducers),
  compose(middleware, devTools),
);
