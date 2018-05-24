import React, { Component } from 'react';

class VideoList extends Component {
  renderList() {
    const list = []
    for (let i=0; i < 5; i++){
      list.push(<li>Video {i}</li>)
    }
    return list;
  }

  render() {
    return (
      <div className="video-list">
        <dl className="videos">
          {this.renderList()}
        </dl>
      </div>
    );
  }
}

export default VideoList;
