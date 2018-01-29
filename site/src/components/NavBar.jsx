import React from 'react';
import { Link } from 'react-router-dom';

const getLinks = (exercises) => {
  const array = [];

  for (const exercise of exercises) {
    array.push(
      <Link to={`/exercises/${exercise.id}`} key={`exercise-${exercise.id}`} className="exerciseLink">
        {exercise.name}
      </Link>);
  }

  return array;
}

export default (props) => (
  <nav>
    <header><Link to="/exercises">Exercises</Link></header>
    {getLinks(props.exercises)}
  </nav>
);
