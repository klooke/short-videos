import React from "react";
import Video from "./Video";
import "./VideoContainer.css";

export default function VideoContainer({videosProps}) {
  return (
    <div className="Video_Container">
      <Video videoProp={videosProps[0]} />
      <Video videoProp={videosProps[1]} />
    </div>
  );
}
