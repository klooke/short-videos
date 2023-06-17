import React, { useRef, useState } from "react";
import VideoSide from "./VideoSide";
import VideoFooter from "./VideoFooter";
import "./Video.css";

export default function Video({videoProp}) {
  const videoRef = useRef();
  const [isRunning, setPlayState] = useState(false);

  function onVideoClick() {
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
        onClick={onVideoClick}
        src={videoProp.url}
        loop
      ></video>
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
