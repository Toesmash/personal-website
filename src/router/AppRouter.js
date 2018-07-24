import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';

import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Home from '../components/Home';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';


export const browserHistory = createHistory();

const AppRouter = () => (
  <Router history={browserHistory}>
    <Switch>
      <PublicRoute path="/" component={Home} exact />
      <PublicRoute path="/portfolio" component={Portfolio} exact />
      <PublicRoute path="/resume" component={Resume} exact />
      <PublicRoute path="/contact" component={Contact} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;