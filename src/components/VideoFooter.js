import React from "react"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./VideoFooter.css"

export default function VideoFooter() {
  return (
    <div className="Video_Footer">
      <h3>@Usuário</h3>
      <p>Descrição do vídeo.</p>
      <div className="Description_Music">
        <MusicNoteIcon />
        <div id="nameMusic">
          <p>Nome da música</p>
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