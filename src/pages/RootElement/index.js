import React from 'react';
import { Outlet } from 'react-router-dom';
import AllWrap from './AllWrap';

const RootElement = () => {
  return (
    <>
      <Outlet />
      <AllWrap />
    </>
  );
};

export default RootElement;
