import { createSlice } from '@reduxjs/toolkit';

const dragSlice = createSlice({
  name: 'drag',
  initialState: {
    isDraggable: false,
    positionX: 0,
    positionY: 0,
  },
  reducers: {
    setDraggable(state) {
      state.isDraggable = true;
    },
    setNoneDraggable(state) {
      state.isDraggable = false;
    },
    setTransformPosit(state, action) {
      state.positionX = action.payload.x;
      state.positionY = action.payload.y;
    },
  },
});

export default dragSlice;

export const dragActions = dragSlice.actions;
