import React from "react";
import "./menubar.css";
import { Link } from "react-router-dom";
import { memo } from "react";

const Menubar = memo(() => {
  return (
    <div className="menubar-area">
      <Link to="/">
        <button className="menu-btn">
          <i className="fa fa-home"></i>홈
        </button>
      </Link>
      <button className="menu-btn">
        <i className="fa fa-fire"></i>인기
      </button>
      <button className="menu-btn">
        <i className="fa fa-globe"></i>탐색
      </button>
      <button className="menu-btn">
        <i className="fa fa-youtube"></i>구독
      </button>
      <button className="menu-btn">
        <i className="fa fa-box"></i>보관함
      </button>
    </div>
  );
});

export default Menubar;
