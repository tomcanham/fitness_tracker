import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { ConnectedRouter /*, push */ } from 'react-router-redux';

import Router from "Components/Router";
import Store, { History } from "Redux/store";

// Now you can dispatch navigation actions from anywhere!
// Store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={Store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={History}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
