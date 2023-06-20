import React from "react";
import "./VideoHeader.css";

// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function VideoHeader({isRunning, isMuted, onSoundClick}) { 
  return (
    <div className="Video_Header">
      <div className="VideoHeader_IsRunning">
        {
          isRunning ? 
            <PauseIcon fontSize="large" /> :
            <PlayArrowIcon fontSize="large" />
        }
      </div>
      <div 
        className="VideoHeader_IsMuted"
        onClick={onSoundClick}
      >
        {
          isMuted ? 
            <VolumeOffIcon fontSize="large" /> :
            <VolumeUpIcon fontSize="large" />
        }
      </div>
    </div>
  )
}