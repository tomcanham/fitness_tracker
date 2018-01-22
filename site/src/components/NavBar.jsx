import React from 'react';
import NavLink from 'Components/NavLink';

const getLinks = (exercises) => {
  const array = [];

  for (const exercise of exercises) {
    array.push(<NavLink link={`/exercises/${exercise.id}`} key={`exercise-${exercise.id}`} title={exercise.name} />);
  }

  return array;
}

export default (props) => (
  <nav>
    <header>Exercises</header>
    {getLinks(props.exercises)}
  </nav>
);
