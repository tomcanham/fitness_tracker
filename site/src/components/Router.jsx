import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'

import App from "Components/App";
import Hello from "Components/Hello";
import Store, { History } from "Redux/store";

import * as helloActions from "Redux/Hello/actions";

export const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

class RouterContainer extends React.Component {
  componentDidMount() {
    const { setFramework } = this.props;
    setFramework('Redux');
  }

  render() {
    const { Hello: { compiler, framework } } = this.props
    return <ConnectedSwitch>
      <App>
        <Route exact path="/" component={() => (<Hello compiler={compiler} framework={framework} />)} />
      </App>
    </ConnectedSwitch>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.location,
    Hello: state.Hello
  };
}

const Router = connect(mapStateToProps, helloActions)(RouterContainer)

export default Router
