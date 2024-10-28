import React from 'react';
import { Outlet } from 'react-router-dom';

const RootElement = () => {
  return (
    <div>
      <Outlet />
      test
    </div>
  );
};

export default RootElement;
