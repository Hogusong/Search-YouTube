import React from 'react';

const VideoListItem = ({ video, selected }) => {
  return (
    <li key={video.id.videoId}>
      <div className="video-list-item"
        onClick={() => selected(video)}>
        <div><img src={video.snippet.thumbnails.default.url} /></div>
        <p>{video.snippet.description}</p>
      </div>
    </li>
  );
}

export default VideoListItem;
