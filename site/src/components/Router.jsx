import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import App from "Components/App";

export const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

export const RouterContainer = () => <ConnectedSwitch>
  <App />
</ConnectedSwitch>;

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.location,
  };
}

const Router = connect(mapStateToProps)(RouterContainer);

export default Router
