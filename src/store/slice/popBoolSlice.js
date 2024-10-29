import { createSlice } from '@reduxjs/toolkit';

const popBoolSlice = createSlice({
  name: 'popBool',
  initialState: {
    popBool: false,
  },
  reducers: {
    popOn(state) {
      state.popBool = true;
    },
    popOff(state) {
      state.popBool = false;
    },
  },
});

export default popBoolSlice;

export const popBoolActions = popBoolSlice.actions;