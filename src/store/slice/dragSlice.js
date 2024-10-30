import { createSlice } from '@reduxjs/toolkit';

const dragSlice = createSlice({
  name: 'drag',
  initialState: {
    isDraggable: false,
  },
  reducers: {
    setDraggable(state) {
      state.isDraggable = true;
    },
    setNoneDraggable(state) {
      state.isDraggable = false;
    },
  },
});

export default dragSlice;

export const dragActions = dragSlice.actions;
