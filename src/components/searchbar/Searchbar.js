import React from "react";
import "./searchbar.css";
import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Searchbar({ searchResult, clickLogo }) {
  const inputRef = useRef();
  let navigate = useNavigate();

  // enter 클릭시 호출 공통함수
  const searchFnc = () => {
    const value = inputRef.current.value; //input의 value값을 가져온다.
    searchResult(value);
    navigate(`/search?search_query=${value}`);
    // console.log(value);
  };

  // 서치버튼 클릭시 호출될 함수
  const inputclick = () => {
    searchFnc();
  };

  // input박스에 enter 시 호출될 함수
  const inputEnter = (e) => {
    if (e.key === "Enter") {
      // console.log("press enter");
      searchFnc();
    }
  };
  return (
    <div className="searchArea">
      <div className="logoarea">
        <button className="btn-leftmenu">
          <i className="fa-solid fa fa-bars"></i>
        </button>
        <h1>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="youtube"
              className="logoimg"
              onClick={clickLogo}
            />
          </Link>
        </h1>
      </div>
      <div className="searchInputarea">
        <input
          type="search"
          placeholder="검색"
          className="searchInput"
          onKeyPress={inputEnter}
          ref={inputRef}
        />
        <button className="searchbtn" onClick={inputclick}>
          <img src="/images/searchicon.png" alt="search" />
        </button>
        <button className="micbtn">
          <i className="fa-solid fa fa-microphone"></i>
        </button>
      </div>
      <div className="topMenuarea">
        <button className="btn-rightmenu">
          <i className="fa fa-solid fa-border-all"></i>
        </button>
        <button className="btn-rightmenu">
          {/* <i className="fa fa-solid fa-grip-vertical"></i> */}
          <i className="fa fa-solid fa-grip-lines-vertical"></i>
        </button>
        <button className="btn-rightmenu">
          <i className="fa-solid fa fa-user"></i>
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
