import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Navi from '../Header/Navi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootElement from '../../pages/RootElement';
import Menu from '../../pages/Category/Menu';
import FootNavi from '../Header/FootNavi';
import Details from '../../pages/Details/Details';

const Wrapping = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background-color: rgb(26, 27, 31);
  overflow-x: hidden;
  overflow-y: auto;
`;

const AllWrap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapping>
              <Header />
              <Navi />
              <RootElement />
              <FootNavi />
            </Wrapping>
          }
        />
        <Route
          path="/menu"
          element={
            <Wrapping>
              <Header />
              <Menu />
              <FootNavi />
            </Wrapping>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Wrapping>
              <Details />
              <FootNavi />
            </Wrapping>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllWrap;
