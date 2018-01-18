import React from 'react';
import PropTypes from 'prop-types';

export default class Hello extends React.Component {
  static propTypes = {
    compiler: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
  }

  getGreeting() {
    return `Howdy from ${this.props.compiler} and ${this.props.framework}!`;
  }

  render() {
    return <h1>{this.getGreeting()}</h1>;
  }
}

export const HelloComponent = () => <Hello compiler="Babel" framework="React" />;
