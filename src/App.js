import React, { Component } from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Top10 from './components/Top10';
import Vote from './components/Vote';
import Revenue from './components/Revenue';
import Trending from './components/Trending';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"><Favorites/></div>
        <div className="top">
          <Trending/>
          <Top10/>
          <Vote/>
          <Revenue/>
        </div>
      </div>
    );
  }
}

export default App;
