import React from 'react';
import { Outlet } from 'react-router-dom';
import AllWrap from '../../components/Wrapper/AllWrap';

const RootElement = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootElement;
