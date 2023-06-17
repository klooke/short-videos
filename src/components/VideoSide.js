import React, { useState } from "react";
import "./VideoSide.css"

/* Icons */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

export default function VideoSide({likes, messages, shares}) {
  const [isLiked, setLike] = useState(false);

  function onLike() {
    setLike(!isLiked);
  }

  return (
    <div className="Video_Side">
      <div 
        className="VideoSide_Like"
        onClick={onLike}
      >
        { 
          isLiked ? 
          <FavoriteIcon fontSize="large"/> :
          <FavoriteBorderIcon fontSize="large"/>
        }
        <p>{ isLiked ? likes + 1 : likes }</p>
      </div>
      <div className="VideoSide_Messages">
        <ChatIcon fontSize="large"/>
        <p>{ messages }</p>
      </div>
      <div className="VideoSide_Share">
        <ShareIcon fontSize="large"/>
        <p>{ shares }</p>
      </div>
    </div>
  )
}