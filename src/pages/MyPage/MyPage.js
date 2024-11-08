// Mypage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./LogInpage";
import LogOutpage from "./LogOutpage";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <LoginPage /> // 비로그인 사용자에게 보여줄 로그인 페이지
      ) : (
        <LogOutpage /> // 로그인된 사용자에게 보여줄 페이지
      )}
    </div>
  );
};

export default App;
