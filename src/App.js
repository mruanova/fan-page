import React, { Component } from 'react';
import './App.css';
import MiniDrawer from './simple/SimpleDrawer';

class App extends Component {
  render() {
    // this.props.history.push(`/contact`);
    let indents = [];
    indents = (
      <div className="App">
        <MiniDrawer></MiniDrawer>
      </div>
    );
    return indents;
  }
}

export default App;
