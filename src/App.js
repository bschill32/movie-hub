import React, { Component } from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Top10 from './components/Top10';

class App extends Component {
  render() {
    return (
      <div>
        <Favorites/>
        <Top10/>
      </div>
    );
  }
}

export default App;
