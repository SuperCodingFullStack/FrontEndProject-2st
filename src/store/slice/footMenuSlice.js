import { createSlice } from '@reduxjs/toolkit';

const footMenuSlice = createSlice({
  name: 'footMenu',
  initialState: {
    isFootMenu: false,
  },
  reducers: {
    footOn(state) {
      state.isFootMenu = true;
    },
    footOff(state) {
      state.isFootMenu = false;
    },
  },
});

export default footMenuSlice;

export const footMenuActions = footMenuSlice.actions;
