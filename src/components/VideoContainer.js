import React from "react";
import Video from "./Video";
import "./VideoContainer.css";

export default function VideoContainer({videosProps}) {
  function onScroll() {
    let container = document.getElementsByClassName("Video_Container")[0];
    [].slice.call(container.children).forEach((item, index) => {
      if (Math.abs(item.getBoundingClientRect().top - container.getBoundingClientRect().top) < 10) {
        item.firstChild.currentTime = 0;
        item.firstChild.play();
      } else {
        item.firstChild.pause();
      }
    });
  }

  return (
    <div 
      className="Video_Container"
      onScroll={onScroll}
    >
      { 
        videosProps.map((item, id) =>
          <Video 
            videoProp={item}
            autoPlay={id === 0}
          />
        )
      }
    </div>
  );
}
