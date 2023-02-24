import "./App.css";
import { Stream } from "@cloudflare/stream-react";
import React from "react";

interface PreviewProps {
  id: string;
  title: string;
  video: string;
}

const data: PreviewProps[] = [
  { id: "P1", title: "赛马", video: "6d66e2d75b1720cdb9f1375733ccf690" },
  { id: "P2", title: "幻想曲", video: "8501cb4101bd27539a78dd0f5b3939d4" },
  { id: "P3", title: "平沙落雁", video: "e913edd5946342e7609afb0c2b1566b3" },
  { id: "P4", title: "告白之夜", video: "41c728bf7dc5680aba7873266628f8ff" },
  { id: "P5", title: "凉凉", video: "367977332e44e9c080c3bbf0a54596d1" },
  { id: "P6", title: "十年人间", video: "b3046f8539d91bb11335731c4ac847c0" },
  { id: "P7", title: "He's a Pirate", video: "74849893b5e053d9a761c6de3fe68c08" },
  { id: "P8", title: "雪落下的声音", video: "8117e1af7d05e39fc91fc6dc2f936736" },
  { id: "P9", title: "左手指月", video: "687160734f831c5149001e8e8e3736ab" },
  { id: "P10", title: "半壶纱", video: "1befec4c0715f3c5822d71488ff0a48c" },
  { id: "P11", title: "伊犁河畔", video: "2e33a91d15aab9995c79acf792586f3a" },
  { id: "P12", title: "浏阳河", video: "0505b5cf681172bd9d70ffea69f41925" },
  { id: "P13", title: "夕阳箫鼓", video: "7e80e7eb186874ec8b83023b1c1e6b8f" },
  { id: "P14", title: "梁山伯与祝英台", video: "d11d78bdf19dd46f54af63bd73c17b0a" },
  { id: "P15", title: "阳光照耀着塔什库尔干", video: "607238cbea64c19697c36d47e1396eef" },
  { id: "E", title: "演职人员", video: "87211e1c2f73ab3ecd3fb828a174e7d7" },
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
