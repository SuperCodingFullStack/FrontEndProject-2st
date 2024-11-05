import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Navi from "../Header/Navi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootElement from "../../pages/RootElement";
import Menu from "../../pages/Category/Menu";
import FootNavi from "../Header/FootNavi";
import Cart from "../../pages/Cart/Cart";
import Details from "../../pages/Details/Details";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SignUp";
import MyPage from "../../pages/MyPage/MyPage";
import ProductRegister from "../../pages/ProductRegister";

const Wrapping = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: rgb(26, 27, 31);
`;

const WrappingBasic = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
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
        />
        <Route
          path="/cart"
          element={
            <Wrapping>
              <Cart />
            </Wrapping>
          }
        />
        <Route
          path="/login"
          element={
            <WrappingBasic>
              <Login />
            </WrappingBasic>
          }
        />

        <Route
          path="/signup"
          element={
            <WrappingBasic>
              <SignUp />
            </WrappingBasic>
          }
        />
        <Route
          path="/mypage"
          element={
            <Wrapping>
              <MyPage />
              <FootNavi />
            </Wrapping>
          }
        />
        <Route
          path="/product-register"
          element={
            <Wrapping>
              <ProductRegister />
              <FootNavi />
            </Wrapping>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllWrap;
