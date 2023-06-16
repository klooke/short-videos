import React, { useRef, useState } from "react";
import "./Video.css";

export default function Video() {
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
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      loop
    ></video>
    </div>
  );
}
