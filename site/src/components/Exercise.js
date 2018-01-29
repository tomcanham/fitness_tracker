import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DisconnectedExercise = ({ match, exercises }) => {
  const exercise = exercises[match.params.exerciseId];
  if (exercise) {
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

export default Exercise;
