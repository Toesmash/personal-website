import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';

import Resume from '../components/Resume';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Projects from '../components/Projects';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Home} exact />
      <PublicRoute path="/resume" component={Resume} exact />
      <PublicRoute path="/projects" component={Projects} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;