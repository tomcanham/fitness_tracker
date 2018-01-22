import React from 'react';
import { Route } from 'react-router-dom';

import App from 'Components/App';

export default ({ location }) => {
  return <Route path="/" component={App} />
}
