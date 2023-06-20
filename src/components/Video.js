import React, { useRef, useState } from "react";
import VideoSide from "./VideoSide";
import VideoFooter from "./VideoFooter";
import "./Video.css";
import VideoHeader from "./VideoHeader";

export default function Video({videoProp, autoPlay}) {
  const videoRef = useRef();
  const [isRunning, setPlayState] = useState(autoPlay);

  function onClick() {
    if (isRunning) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayState(!isRunning);
  }

  return (
    <div className="Video">
      <video
        className="Video_Content"
        ref={videoRef}
        onClick={onClick}
        src={videoProp.url}
        autoPlay={autoPlay}
        loop
      ></video>
      <VideoHeader 
        isRunning={isRunning}
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
