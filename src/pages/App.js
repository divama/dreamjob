import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Header (App)</div>
        <Link to="/">HomePage</Link>
        <Link to="/EmploymentPage">EmploymentPage</Link>
        <div>{this.props.children}</div>
        <div>Footer</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
