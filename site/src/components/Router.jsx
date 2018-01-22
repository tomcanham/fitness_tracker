import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Store from "Redux/store";
import LocationAwareApp from 'Components/LocationAwareApp';

export default <Provider store={Store}>
  <Router>
    <LocationAwareApp />
  </Router>
</Provider>;
