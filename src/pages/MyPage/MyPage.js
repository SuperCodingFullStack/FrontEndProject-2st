// Mypage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./LogInpage";
import LogOutpage from "./LogOutpage";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   // 토큰의 유무로 로그인 상태 확인
  //   const token = localStorage.getItem("accessToken"); // 또는 쿠키에서 가져올 수도 있음
  //   if (token) {
  //     // 토큰 유효성 검사를 위해 서버에 요청
  //     axios
  //       .get("/protected", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         setIsAuthenticated(true); // 유효하면 로그인 상태 유지
  //       })
  //       .catch((error) => {
  //         console.log("토큰이 유효하지 않음:", error);
  //         setIsAuthenticated(false); // 유효하지 않으면 로그아웃 처리
  //         localStorage.removeItem("accessToken"); // 불필요한 토큰 제거
  //       });
  //   } else {
  //     setIsAuthenticated(false); // 토큰이 없으면 비로그인 상태
  //   }
  // }, []);

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
