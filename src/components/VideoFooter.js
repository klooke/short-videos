import React from "react"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./VideoFooter.css"

export default function VideoFooter({user, description, music}) {
  return (
    <div className="Video_Footer">
      <h3>{ user }</h3>
      <p> { description }</p>
      <div className="Description_Music">
        <MusicNoteIcon />
        <div id="nameMusic">
          <p>{ music }</p>
        </div>
        <img
         id="diskSpinning"
         src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
         alt="Disco girando."
        />
      </div>
    </div>
  );
}