import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    const { on } = this.setState;
    this.setState({
      on: !on,
    });
  };

  render() {
    return (
      <div>
        <button>Show/Hide</button>
      </div>
    );
  }
}
