import "./App.css";
import { Stream } from "@cloudflare/stream-react";
import React from "react";

interface PreviewProps {
  id: string;
  title: string;
  video: string;
}

function Preview({ id, title, video }: PreviewProps) {
  return (
    <article>
      <h2>{ id }: { title }</h2>
      <Stream controls src={video} />
    </article>
  )
}

function App() {
  return (
    <div id="App">
      <Preview id="P7" title="He's a Pirate" video="8f46157f0fd03546e7ec917b8d6797bc" />
    </div>
  );
}

export default App;
