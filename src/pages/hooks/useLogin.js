import { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/authSlice";

const useLogin = () => {
  const dispatch = useDispatch(); // 로그인 및 로그아웃 시 reudx 상태 업데이트
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (id, password) => {
    try {
      const response = await api.post("/auth/login", { id, password });
      const token = response.data.token;
      localStorage.setItem("token", token); // JWT 토큰을 localStorage에 저장
      dispatch(login(token));
      setError(null);
      navigate("/mypage"); // 로그인 성공 시 마이페이지로 이동
    } catch (err) {
      setError("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
    }
  };
  return {
    error,
    handleLogin,
  };
};

export default useLogin;
