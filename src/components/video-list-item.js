import React from 'react';

const VideoListItem = ({ video, selected }) => {
  return (
    <li key={video.id.videoId}
        className="video-list-item"
        onClick={() => selected(video)}>
      <img src={video.snippet.thumbnails.default.url} alt=""/>
      <p>{video.snippet.description}</p>
    </li>
  );
}

export default VideoListItem;
