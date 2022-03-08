import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "./components/videolist/VideoList";
import Searchbar from "./components/searchbar/Searchbar";
import Videoview from "./components/videoview/Videoview";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

let defaultVideos = JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem("selctedWatch")) || null;

function App({ youtube }) {
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video); //video가 받아지면 setSelectView 함수로 state 값 받아진 비디오로 업데이트
    selectedWatch = video;
    console.log(video);
  };

  const search = (searchValTxt) => {
    setSelectView(null); //검색했을 때 뷰가 아닌 목록만 반환되도록 setSelectView은 null로 업데이트
    youtube.searchResult(searchValTxt).then((videos) => setVideoItems(videos));
  }; //서치함수 끝

  useEffect(() => {
    youtube.mostPopular().then((videos) => {
      setVideoItems(videos);
      defaultVideos = videos;
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("defaultVideos", JSON.stringify(defaultVideos));
    sessionStorage.setItem("selectedWatch", JSON.stringify(selectedWatch));
  }, [videoItems, selectView]);

  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Searchbar searchResult={search} clickLogo={clickLogo} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
              />
            }
          />
          <Route
            path="/watch"
            element={
              <Watch
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
                selectedWatch={selectedWatch}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// && || 단축평가
// false && 값 => false 리턴
// true && 값 => 값
// 값 && true => true
// 값1 && 값2 => 값2
