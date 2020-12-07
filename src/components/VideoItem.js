import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

//in onClick we pass an arrow funcn that return onVideoSelect. we cannot directly put onVideoSelect because we need to pass in the video as a param. if we did this onClick= onVideoSelect(video), then onVideoSelect would be called immediately. we do not want this. we want to call it ONLY when user clicks on a video item.

export default VideoItem;
