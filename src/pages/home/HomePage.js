import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        Homepage is here! <Link to="/EmploymentPage">EmploymentPage</Link>
      </div>
    );
  }
}

export default HomePage;
