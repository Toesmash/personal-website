import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicRoute = ({ component: Component }) => {
  return (
    <Route
      component={() => (
        <div>
          <Header />
          <Component />
          <Footer />
        </div>
      )}
    />
  );
};

export default PublicRoute;