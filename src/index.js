import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

// Import css
import './semantic.min.css';

const App = () => (
  <div>
    App. <Link to="/EmploymentPage">EmploymentPage</Link>
  </div>
);

const EmploymentPage = () => (
  <div>
    EmploymentPage. <Link to="/">App</Link>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/EmploymentPage" component={EmploymentPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
