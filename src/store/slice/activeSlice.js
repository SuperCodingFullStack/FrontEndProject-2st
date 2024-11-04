import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "active",
  initialState: {
    isActive: true,
    index: 0,
    scrollTop: 0,
    isScroll: false,
  },
  reducers: {
    Active(state, action) {
      state.isActive = true;
      state.index = action.payload;
    },
    ScrollTop(state, action) {
      state.scrollTop = action.payload.top;
    },
    isScroll(state) {
      state.isScroll = true;
    },
    isNotScroll(state) {
      state.isScroll = false;
    },
  },
});

export default activeSlice;

export const activeActions = activeSlice.actions;
