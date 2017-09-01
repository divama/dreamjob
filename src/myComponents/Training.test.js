import React from 'react';
import ReactDOM from 'react-dom';
import Training from './Training';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Training />, div);
});
