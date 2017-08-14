import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>source: <a href="https://github.com/facebookincubator/create-react-app" target="_blank">https://github.com/facebookincubator/create-react-app</a></p>
        <p><a href="https://divama.github.io/Me/" target="_blank">https://divama.github.io/Me</a></p>
      </div>
    );
  }
}

export default App;
