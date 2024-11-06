import axios from "axios";

// API 요청 설정 파일

const api = axios.create({
  baseURL: "http://52.78.168.169", // 백엔드 API 주소 입력
  headers: {
    "Content-Type": "application/json",
  },
});

// Authorization 헤더에 JWT 토큰 추가
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
