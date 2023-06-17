import React from "react";
import Video from "./Video";
import "./VideoContainer.css";

export default function VideoContainer({videosProps}) {
  return (
    <div className="Video_Container">
      <Video />
      <Video />
      <Video />
    </div>
  );
}
