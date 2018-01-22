import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const DisconnectedExercise = ({ match, exercises }) => {
  const exercise = exercises[match.params.exerciseId];
  if (exercise) {
    console.log('EXERCISE:', exercise);

    return (<div>
      <h1>{exercise.name}</h1>
      <p>{exercise.description}</p>
    </div>);
  }

  return null; // no exercise yet
};

DisconnectedExercise.propTypes = {
  match: PropTypes.object.isRequired,
  exercises: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    exercises: (state.Exercises && state.Exercises.exercises) || {},
  };
};

const Exercise = connect(mapStateToProps)(DisconnectedExercise);

const ExercisesDashboard = () => (
  <h1>Exercises Dashboard!</h1>
);

const Exercises = ({ match }) => {
  return (<div>
    <Route exact path={match.url} component={ExercisesDashboard} />
    <Route path={`${match.url}/:exerciseId`} component={Exercise} />
  </div>);
};

Exercises.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Exercises;
