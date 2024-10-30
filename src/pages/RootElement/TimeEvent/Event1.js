import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventOne = styled.div``;

const Event1 = () => {
  return (
    <EventOne>
      <ul className="flex gap-2">
        <li className="inline-block" style={{ flex: '0 0 auto' }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: '1px solid rgba(0,0,0,.15)',
              borderRadius: '6px',
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
        <li className="inline-block" style={{ flex: '0 0 auto' }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: '1px solid rgba(0,0,0,.15)',
              borderRadius: '6px',
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
        <li className="inline-block" style={{ flex: '0 0 auto' }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: '1px solid rgba(0,0,0,.15)',
              borderRadius: '6px',
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
        <li className="inline-block" style={{ flex: '0 0 auto' }}>
          <Link
            to="/"
            className="flex items-center p-2 bg-white"
            style={{
              border: '1px solid rgba(0,0,0,.15)',
              borderRadius: '6px',
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
      </ul>
    </EventOne>
  );
};

export default Event1;
