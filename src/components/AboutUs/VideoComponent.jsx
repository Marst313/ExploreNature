import React, { useCallback, useRef, useState } from 'react';

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef(null);

  const playVideo = useCallback(() => {
    const videoBtn = video.current;
    if (isPlaying) {
      videoBtn.pause();
    } else {
      videoBtn.play();
    }

    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <div className="container-video">
      <video ref={video} src="./img/AboutUs/video/video1.mp4"></video>
      <div className="play-btn">
        <div className={`btn  ${isPlaying && 'btn-active '}`} onClick={playVideo}></div>
      </div>
    </div>
  );
};

export default VideoComponent;
