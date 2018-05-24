import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return <h2>Enter keyword to search . . .</h2>;
  }

  const url = `https://www.youtube.com/embed/${props.video.id.videoId}`;

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
