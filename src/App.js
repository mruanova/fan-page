import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './simple/SimpleAppBar';
import SimpleCard from './simple/SimpleCard';

class App extends Component {
  render() {
    let indents = [];
    indents = (
      <div className="App">
        <header className="App-header">
          <SimpleAppBar></SimpleAppBar>
        </header>
        <SimpleCard></SimpleCard>
      </div>
    );
    return indents;
  }
}

export default App;
