import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => (<a href={props.link}>{props.title}</a>);

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavLink;
