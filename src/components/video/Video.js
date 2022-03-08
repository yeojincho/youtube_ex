import React from "react";
import "./video.css";
import { Link } from "react-router-dom";
import * as Common from "../../Common";
// import numberWithCommas from "../../Common";

const Video = ({ videoItem, onVideoClick, display, search }) => {
  //({videoItem})
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";

  return (
    <li className={`${container} ${displayClass} ${search ? "search" : ""}`}>
      <Link to="/watch">
        <div
          className="video"
          onClick={() => {
            onVideoClick(videoItem);
          }}
        >
          <img
            className="thumimg thumnail"
            src={videoItem.snippet.thumbnails.default.url}
            alt="video thumnail"
          />
          <div className="titledata metadata">
            <div className="channelImg">
              <img
                className="channelImg-thum"
                src={videoItem.snippet.thumbnails.default.url}
                alt="video thumnail"
              />
            </div>
            <div>
              <p className="title">{videoItem.snippet.title}</p>
              <p className="channelTitle channel">
                {videoItem.snippet.channelTitle}
              </p>
              <p className="title">조회수{videoItem.statistics.viewCount}회</p>
              <p className="publishDate">
                {Common.publishDate(videoItem.snippet.publishedAt)}
              </p>
              {!search && (
                <p className="viewNum">
                  댓글{" "}
                  {Common.numberWithCommas(videoItem.statistics.commentCount)}개
                </p>
              )}
              {search && (
                <div className="description">
                  {videoItem.snippet.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Video;
