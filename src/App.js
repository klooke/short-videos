import "./App.css";
import VideoContainer from "./components/VideoContainer";

export default function App() {
  const videoPropA = {
    url: "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z",
    user: "@Usuário A",
    description: "Descrição do video A.",
    music: "Título da música A.",
    likes: 111,
    messages: 222,
    shares: 333
  }

  const videoPropB = {
    url: "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z",
    user: "@Usuário B",
    description: "Descrição do video B.",
    music: "Título da música B.",
    likes: 444,
    messages: 555,
    shares: 666
  }

  return (
    <div className="App">
      <VideoContainer      
        videosProps={[
          videoPropA,
          videoPropB
        ]}
      />
    </div>
  );
}
