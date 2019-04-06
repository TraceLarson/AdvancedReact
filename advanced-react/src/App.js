import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRPC';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle>
            {({ on, toggle }) => (
              <>
                {on && <h1>Show Me</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </>
            )}
          </Toggle>
        </header>
      </div>
    );
  }
}

export default App;
