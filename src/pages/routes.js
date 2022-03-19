import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home, Projects } from './';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;