import React from 'react';
import ReactDOM from 'react-dom';
import Employment from './Employment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Employment />, div);
});
