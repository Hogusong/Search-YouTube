import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, selected }) => {
  function renderList() {
    const list = videos.map(video => 
      <VideoListItem key={video.etag} video={video} 
          selected={selected}/>);
    return list;
  }

  return (
    <ul className="video-list">
      {renderList()}
    </ul>
  );
}

export default VideoList;
