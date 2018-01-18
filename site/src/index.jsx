import React from 'react'
import ReactDOM from 'react-dom'

import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';

import Hello, { HelloComponent } from "Components/Hello";
import Store, { History } from "Redux/store";

// Now you can dispatch navigation actions from anywhere!
// Store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={Store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={History}>
      <div>
        <Route exact path="/" component={HelloComponent}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('application')
)
