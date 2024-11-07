import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"), // 토큰 유무에 따라 초기 상태 설정
    token: localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // 토큰을 localStorage에 저장
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token"); // 로그아웃 시 토큰 삭제
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
