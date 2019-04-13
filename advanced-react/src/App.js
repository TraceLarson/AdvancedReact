import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toggle, Portal, Modal } from './Utilities';

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
                <button onClick={toggle}>LOGIN</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still</h1>
                </Modal>
              </>
            )}
          </Toggle>
        </header>
      </div>
    );
  }
}

export default App;
