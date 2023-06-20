import React, { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoSide from "./VideoSide";
import VideoFooter from "./VideoFooter";
import "./Video.css";

export default function Video({videoProp, autoPlay}) {
  const videoRef = useRef();
  const [isRunning, setPlayState] = useState(autoPlay);
  const [isMuted, setSoundState] = useState(false);

  function onVideoClick() {
    if (isRunning) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayState(!isRunning);
  }

  function onSoundClick() {
    if (isMuted) {
      videoRef.current.volume = 0.0;
    } else {
      videoRef.current.volume = 1.0;
    }
    setSoundState(!isMuted);
  }

  return (
    <div className="Video">
      <video
        className="Video_Content"
        ref={videoRef}
        onClick={onVideoClick}
        src={videoProp.url}
        autoPlay={autoPlay}
        loop
      ></video>
      <VideoHeader 
        isRunning={isRunning}
        isMuted={isMuted}
        onSoundClick={onSoundClick}
      />
      <VideoSide 
        likes={videoProp.likes}
        messages={videoProp.messages}
        shares={videoProp.shares}
      />
      <VideoFooter 
        user={videoProp.user}
        description={videoProp.description}
        music={videoProp.music}
      />
    </div>
  );
}
