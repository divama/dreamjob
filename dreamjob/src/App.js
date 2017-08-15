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
          <a href="https://divama.github.io/Me/">https://divama.github.io/Me</a>
          <a href="https://github.com/divama/Me/projects/1">
            https://github.com/divama/Me/projects/1
          </a>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="ui two column stackable grid">
          <div className="row">
            <div className="ten wide column">
              <div className="ui segment">Left 1</div>
            </div>
            <div className="six wide column">
              <div className="ui segment ">right 1</div>
            </div>
          </div>

          <div className="row">
            <div className="ten wide column">
              <div className="ui segment">Left 2</div>
              <div className="ui segment">Left 3</div>
            </div>
            <div className="six wide column">
              <div className="ui segment">right 2</div>
              <div className="ui segment">right 3</div>
              <div className="ui segment">right 4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
