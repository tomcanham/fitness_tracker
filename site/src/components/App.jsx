import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'Components/AppBar';
import NavBar from 'Components/NavBar';

const App = (props) => (<div className="application">
  <AppBar />
  <section id="content">
    <NavBar />
    <main>
      {props.children}
    </main>
  </section>
</div>);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
