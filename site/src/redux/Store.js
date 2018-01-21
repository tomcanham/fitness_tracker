import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

const reducersWithRouter = {
  ...reducers,
  router: routerReducer,
};

// Create a history of your choosing (we're using a browser history in this case)
export const History = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddlewareWithHistory = routerMiddleware(History);
const middleware = applyMiddleware(routerMiddlewareWithHistory, thunk);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__() :
  f => f;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
  combineReducers(reducersWithRouter),
  compose(middleware, devTools),
);
