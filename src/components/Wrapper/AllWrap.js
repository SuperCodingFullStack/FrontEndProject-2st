import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Singup/SignUp";

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
          path="/login"
          element={
            <Wrapping>
              <Login />
            </Wrapping>
          }
        />

        <Route
          path="/signup"
          element={
            <Wrapping>
              <SignUp />
            </Wrapping>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllWrap;
