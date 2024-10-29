import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Navi from '../Header/Navi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootElement from '../../pages/RootElement';

const Wrapping = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background-color: rgb(26, 27, 31);
  overflow: hidden;
`;

const AllWrap = () => {
  return (
    <Wrapping>
      <Header />
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/" element={<RootElement />} />
        </Routes>
      </BrowserRouter>
    </Wrapping>
  );
};

export default AllWrap;
