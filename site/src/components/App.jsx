import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import AppBar from 'Components/AppBar';
import NavBar from 'Components/NavBar';
import Exercises from 'Components/Exercises';

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
    const { children, orderedExercises } = this.props;

    return (<div className="application">
      <AppBar />

      <section id="content">
        <NavBar exercises={orderedExercises} />
        <main>
          <Route path="/exercises" component={Exercises} />
        </main>
      </section>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    orderedExercises: state.Exercises && state.Exercises.orderedExercises,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
     actions: bindActionCreators(Object.assign({}, exerciseActions), dispatch),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
