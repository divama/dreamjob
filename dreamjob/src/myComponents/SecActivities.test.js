import React from 'react';
import ReactDOM from 'react-dom';
import SecActivities from './SecActivities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecActivities />, div);
});
