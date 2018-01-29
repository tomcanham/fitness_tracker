import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Exercise from './Exercise';

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
