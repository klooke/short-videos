import React from "react";
import "./VideoHeader.css";

// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function VideoHeader({isRunning}) {
  return (
    <div className="Video_Header">
      {
        isRunning ? 
          <PauseIcon fontSize="large" /> :
          <PlayArrowIcon fontSize="large" />
      }
    </div>
  )
}