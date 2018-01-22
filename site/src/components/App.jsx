import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppBar from 'Components/AppBar';
import NavBar from 'Components/NavBar';

import * as exerciseActions from 'Redux/Exercises/actions';

export class AppContainer extends React.Component {
  componentDidMount() {
    const { fetchAll } = this.props.actions;
    fetchAll();
  }

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children, exercises } = this.props;

    return (<div className="application">
      <AppBar />
      <section id="content">
        <NavBar exercises={exercises} />
        <main>
          {children}
        </main>
      </section>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.location,
    exercises: state.Exercises && state.Exercises.exercises,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
     actions: bindActionCreators(Object.assign({}, exerciseActions), dispatch),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default App;
