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
        <p><a href="https://divama.github.io/Me/">https://divama.github.io/Me</a></p>
        <p><a href="https://github.com/divama/Me/projects/1">https://github.com/divama/Me/projects/1</a>
        <button className="ui button">Button</button></p>
      </div>
    );
  }
}

export default App;
