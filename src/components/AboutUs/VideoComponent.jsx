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
    <div className="video-container  p-5 flex justify-center items-center relative overflow-hidden   lg:ml-20 lg:w-1/2  w-10/12 ">
      <video ref={video} src="./img/AboutUs/video/video1.mp4" className="rounded-xl -skew-x-6 "></video>
      <div className="play-btn skew-x-3 flex  justify-center items-center group">
        <div className={`btn  ${isPlaying && 'btn-active '}`} onClick={playVideo}></div>
      </div>
    </div>
  );
};

export default VideoComponent;
