import React from 'react';
import NavLink from 'Components/NavLink';

const getLinks = (count) => {
  const array = [];

  for (let i = 0; i < count; ++i) {
    array.push(<NavLink link="#" key={`nav-link-${i}`} title="An Exercise Link" />);
  }

  return array;
}

export default () => (
  <nav>
    <header>Exercises</header>
    {getLinks(25)}
  </nav>
);
