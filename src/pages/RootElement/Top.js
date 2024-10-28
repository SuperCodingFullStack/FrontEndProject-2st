import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChevronDown, FaBell } from 'react-icons/fa6';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainPop from './MainPop';
import { useDispatch, useSelector } from 'react-redux';
import { popBoolActions } from '../../store/slice/popBoolSlice';
import ReactDOM from 'react-dom';
import Dimmed from './Dimmed';

const Tops = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 55px;
`;

const buttonAni = keyframes`
    0% {
        background-color: transparent;
    }
    100% {
        background-color: #fff;
    }
`;

const buttonSvgAni = keyframes`
    0% {
        fill: #fff;
        transform: translateY(0px);
    }

    50% {
        fill: #000;
        transform: translateY(3px);
    }
    
    100% {
        fill: #000;
        transform: translateY(0px);
    }
`;

const Buttons = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  .img {
    height: 38px;
    padding: 8px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .chev {
    padding-left: 5px;
    .chev-wrap {
      border: 1px solid #fff;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        fill: #fff;
        font-size: 7px;
        animation: ${buttonSvgAni} 2s 6s ease infinite;
      }
      animation: ${buttonAni} 2s 6s ease infinite;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  button,
  a {
    background-color: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    display: block;
    svg {
      fill: #fff;
      font-size: 20px;
    }
  }
`;

const Top = () => {
  const dispatch = useDispatch();

  const popOn = () => {
    dispatch(popBoolActions.popOn());
  };

  const popOnOff = useSelector((state) => state.popBools.popBool);

  return (
    <Tops>
      {ReactDOM.createPortal(<MainPop />, document.querySelector('#root'))}
      {popOnOff &&
        ReactDOM.createPortal(<Dimmed />, document.querySelector('#root'))}
      <Buttons onClick={popOn}>
        <div className="img">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="chev">
          <div className="chev-wrap">
            <FaChevronDown />
          </div>
        </div>
      </Buttons>
      <Icons>
        <button>
          <FaBell />
        </button>
        <Link to="/cart">
          <span className="sr-only">장바구니 가기</span>
          <FaCartArrowDown />
        </Link>
      </Icons>
    </Tops>
  );
};

export default Top;
