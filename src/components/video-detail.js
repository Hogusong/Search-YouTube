import React, { Component } from 'react';

const VideoDetail = (props) => {
  let url = ''
  if (props.video) {
    url = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  } else {
    return null;
  }
  return (
    <div className="video-detail">
      <div className="video">
        <iframe title="YouTube Video" src={url}></iframe>
      </div>
      <div className="detail">
        <p id='title'>{props.video.snippet.title}</p>
        <p id='desc'>{props.video.snippet.description} :</p>
      </div>
    </div>
  );
}

export default VideoDetail;
