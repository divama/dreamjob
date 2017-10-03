import React from 'react';
import { Route } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import EmploymentPage from './employment/EmploymentPage';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="employment" component={EmploymentPage} />
  </Route>
);
