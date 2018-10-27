import React, { Component } from 'react';
import './App.css';
import Favorites from './components/Favorites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favorites/>
      </div>
    );
  }
}

export default App;
