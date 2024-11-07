import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"), // 토큰 유무에 따라 초기 상태 설정
    token: localStorage.getItem("token"),
    userId: null,
    profile_img: null,
    caches: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      state.userId = action.payload.userId;
      state.profile_img = action.payload.profile_img;
      state.caches = action.payload.caches;
      localStorage.setItem("token", action.payload); // 토큰을 localStorage에 저장
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userId = null;
      state.profile_img = null;
      state.caches = null;
      localStorage.removeItem("token"); // 로그아웃 시 토큰 삭제
    },
    deactive: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    setUserInfo: (state, action) => {
      state.userId = action.payload.userId;
      state.profile_img = action.payload.profile_img;
      state.caches = action.payload.caches;
    },
  },
});

export const { login, logout, deactive, setUserInfo } = authSlice.actions;

export default authSlice;
