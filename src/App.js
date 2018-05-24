import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to YouTube</h1>
        </header>
        <div className="container">
          <SearchBar />
          <VideoDetail />
          <VideoList  />
        </div>
      </div>
    );
  }
}

export default App;
