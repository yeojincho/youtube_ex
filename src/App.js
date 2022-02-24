import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videolist/VideoList";

function App() {
  const [videoItems, setVideoItems] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBdXT4_TagHX-Qkux6cfofxibdGbyYRqsU\n",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items)) //items 받아와서 setVideoItems 전달
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
