// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyPage from "./pages/MyPage";
import ProductRegister from "./pages/ProductRegister";

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로에 Home 컴포넌트 또는 리다이렉트 추가 */}
        <Route path="/" element={<Navigate to="/mypage" />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/product-register" element={<ProductRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
