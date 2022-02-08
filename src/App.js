import React, { Component } from 'react';
import Count from './Count';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Count App</h1>
        <Count />
      </div>
    )
  }
}

export default App;
