import React from 'react';
import PropTypes from 'prop-types';

export default class Hello extends React.Component {
  static propTypes = {
    compiler: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.frameWork !== this.props.frameWork) {
      console.log("PROPS CHANGE!");
      console.log("PREV:", this.props);
      console.log("NEXT:", nextProps);
    // }
  }

  getGreeting() {
    return `Howdy from ${this.props.compiler} and ${this.props.framework}!`;
  }

  render() {
    return <h1>{this.getGreeting()}</h1>;
  }
}
