import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';

const Wrapping = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background-color: rgb(26, 27, 31);
`;

const AllWrap = () => {
  return (
    <Wrapping>
      <Header />
      <RouterProvider router={router} />
    </Wrapping>
  );
};

export default AllWrap;
