import React from "react";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function publishDate(publishDateValue) {
  const publishedDate = new Date(publishDateValue);
  const currentDate = new Date();
  const second = (currentDate.getTime() - publishedDate.getTime()) / 1000; //getTime: 1970년1월1일 기준으로 날짜를 1/1000단위로 나타내줌  나누기 1000을 해서 초단위로 나오도록 했음
  let result;
  if (second < 60) {
    result = `$(second)초 전`;
  } else if (second < 3600) {
    result = `${Math.floor(second / 60)}분 전`;
  } else if (second < 86400) {
    result = `${Math.floor(second / 3600)}시간 전`;
  } else if (second < 604800) {
    result = `${Math.floor(second / 86400)}일 전`;
  } else if (second < 2592000) {
    result = `${Math.floor(second / 604800)}주 전`;
  } else if (second < 31536000) {
    result = `${Math.floor(second / 2592000)}달 전`;
  } else {
    result = `${Math.floor(second / 31536000)}년 전`;
  }
  return result;
}
