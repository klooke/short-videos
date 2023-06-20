import React, { useEffect, useState } from "react";
import VideoContainer from "./components/VideoContainer";
import db from "./config/firebase"
import "./App.css";
import { collection, getDocs } from "firebase/firestore/lite";

export default function App() {
  const maxHeight = window.innerHeight < 880 ? window.innerHeight : null;
  const [videosProps, setVideos] = useState([]);
  
  async function getVideos(db) {
    const videos = collection(db, "Videos");
    const videosDocs = await getDocs(videos);
    const videosProps = videosDocs.docs.map(doc => doc.data());
    setVideos(videosProps);
  }

  useEffect(() => {
    getVideos(db);
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <VideoContainer videosProps={videosProps} />
    </div>
  );
}
