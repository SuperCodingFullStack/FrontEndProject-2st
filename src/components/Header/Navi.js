import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { activeActions } from "../../store/slice/activeSlice";

const Navis = styled.ul`
  padding: 0 15px;
  display: flex;
  gap: 15px;
  position: sticky;
  top: 0;
  z-index: 30;
  background-color: rgb(26, 27, 31);
  li {
    a {
      display: block;
      padding: 20px 0;
      color: #fff;
      position: relative;
      opacity: 0.6;
      &:hover,
      &.active {
        opacity: 1;
      }
      &:hover::after,
      &.active::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
      }
    }
  }
`;

const Navi = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.activing.isActive);
  const num = useSelector((state) => state.activing.index);

  return (
    <Navis>
      <li>
        <Link
          to="/"
          onClick={() => {
            dispatch(activeActions.Active(0));
          }}
          className={`${active && num === 0 ? "active" : ""}`}
        >
          추천
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => {
            dispatch(activeActions.Active(1));
          }}
          className={`${active && num === 1 ? "active" : ""}`}
        >
          브랜드
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => {
            dispatch(activeActions.Active(2));
          }}
          className={`${active && num === 2 ? "active" : ""}`}
        >
          발매
        </Link>
      </li>
    </Navis>
  );
};

export default Navi;
