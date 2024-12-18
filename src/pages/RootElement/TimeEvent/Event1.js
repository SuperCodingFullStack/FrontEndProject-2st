import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventOne = styled.div`
  overflow: hidden;
`;

const Event1 = ({ px }) => {
  return (
    <EventOne>
      <ul className="flex gap-2" style={{ transform: `translateX(-${px}px)` }}>
        <li
          className="inline-block"
          style={{ flex: "0 0 auto", width: "auto" }}
        >
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: "1px solid rgba(0,0,0,.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src="https://image.msscdn.net/display/images/2024/10/24/586a1d82de864453a66bcfc81f5428f0.jpg"
              alt="icons"
              width="26px"
              height="26px"
            />
            <span className="text-sm ml-2">스파이더 주짓수 도복</span>
          </Link>
        </li>
        <li className="inline-block" style={{ flex: "0 0 auto" }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: "1px solid rgba(0,0,0,.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src="https://image.msscdn.net/display/images/2024/10/24/ac278d438d554300932df7f0d397278e.jpg"
              alt="icons"
              width="26px"
              height="26px"
            />
            <span className="text-sm ml-2">유호진 스타일링</span>
          </Link>
        </li>
        <li className="inline-block" style={{ flex: "0 0 auto" }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: "1px solid rgba(0,0,0,.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src="https://image.msscdn.net/display/images/2024/10/24/586a1d82de864453a66bcfc81f5428f0.jpg"
              alt="icons"
              width="26px"
              height="26px"
            />
            <span className="text-sm ml-2">스파이더 주짓수 도복</span>
          </Link>
        </li>
        <li className="inline-block" style={{ flex: "0 0 auto" }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: "1px solid rgba(0,0,0,.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src="https://image.msscdn.net/display/images/2024/10/28/2a0d630975a14b2fb6d36089e812c370.jpg"
              alt="icons"
              width="26px"
              height="26px"
            />
            <span className="text-sm ml-2">아웃스탠딩 데이</span>
          </Link>
        </li>
      </ul>
    </EventOne>
  );
};

export default Event1;
