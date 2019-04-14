/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import React, { Component, Fragment, createContext } from 'react';
import './App.css';

import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import logo from './logo.svg';

const UserContext = createContext();

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Trace',
    email: 'trace@email.com',
  };

  return() {
    <UserContext.Provider
      value={{
        user: this.state,
      }}
    >
      {this.props.children}
    </UserContext.Provider>;
  }
}

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
