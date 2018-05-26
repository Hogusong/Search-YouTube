import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './css/style.css';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDHF38rBvx5gIUlMKjF7JLLn11HKuZfgzg';//to access youtube video

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: ''
    }
    this.searchVideo = this.searchVideo.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  searchVideo(response){
    YTSearch({key: API_KEY, term: response}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  selectVideo(response) {
    this.setState({ selectedVideo: response });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to YouTube</h1>
        </header>
        <div className="container">
          <SearchBar search={this.searchVideo} />
          <div className="about-video">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList  videos={this.state.videos} selected={this.selectVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
