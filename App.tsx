import "./App.css";
import { Stream } from "@cloudflare/stream-react";
import React from "react";

interface PreviewProps {
  id: string;
  title: string;
  video: string;
}

const data: PreviewProps[] = [
  { id: "P1", title: "赛马", video: "b50256342eb9d1a6e99f830e8176979d" },
  { id: "P2", title: "幻想曲", video: "ebbc5cb008fb6bbbe58386f9e7377d6e" },
  { id: "P3", title: "平沙落雁", video: "244a6f7ba8b62422dd271b87e4235168" },
  { id: "P4", title: "告白之夜", video: "8563551f4b715a1b8738196638fad54a" },
  { id: "P5", title: "凉凉", video: "c9c2206893e60d690e104bcb86bc26f1" },
  { id: "P6", title: "十年人间", video: "80f7bf487ad6362100eda319f4ad139f" },
  { id: "P7", title: "He's a Pirate", video: "28b202cf849b15ea252f3adce759174c" },
  { id: "P8", title: "雪落下的声音", video: "27a3a6ecad1ef4be5815ebf8bcdad991" },
  { id: "P9", title: "左手指月", video: "1ca9397e155ebf8b26b79067fcefa07a" },
  { id: "P10", title: "半壶纱", video: "d2076c49169a9a43cef3194178c9b3ec" },
  { id: "P11", title: "伊犁河畔", video: "f3bbe4fd30dfa04e81038a6298261f6e" },
  { id: "P12", title: "浏阳河", video: "ef4dce2671082e5faa7d8592367283f4" },
  { id: "P13", title: "夕阳箫鼓", video: "04c1aacef4ccc40bf2e0f47781553eb1" },
  { id: "P14", title: "梁山伯与祝英台", video: "9a3d8045d673c4656edb64cd24ef1e85" },
  { id: "P15", title: "阳光照耀着塔什库尔干", video: "a9bdff762cb188672f317669c4aba069" },
];

function Preview({ id, title, video }: PreviewProps) {
  return (
    <article>
      <h2>
        {id}: {title}
      </h2>
      <Stream controls src={video} />
    </article>
  );
}

function App() {
  return (
    <div id="App">
      <h1>癸卯兔年国乐大典视频预览</h1>
      {data.map((x) => (
        <Preview {...x} />
      ))}
    </div>
  );
}

export default App;
