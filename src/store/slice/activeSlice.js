import { createSlice } from '@reduxjs/toolkit';

const activeSlice = createSlice({
  name: 'active',
  initialState: {
    isActive: true,
    index: 0,
  },
  reducers: {
    Active(state, payload) {
      state.isActive = true;
      state.index = payload;
    },
  },
});

export default activeSlice;

export const activeActions = activeSlice.actions;
