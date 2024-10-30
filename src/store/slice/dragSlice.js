import { createSlice } from '@reduxjs/toolkit';

const dragSlice = createSlice({
  name: 'drag',
  initialState: {
    isDraggable: false,
    startPositionX: 0,
    startPositionY: 0,
  },
  reducers: {
    setDraggable(state) {
      state.isDraggable = true;
    },
    setNoneDraggable(state) {
      state.isDraggable = false;
    },
    setTransformPosit(state, action) {
      state.startPositionX = action.payload.x;
      state.startPositionY = action.payload.y;
    },
  },
});

export default dragSlice;

export const dragActions = dragSlice.actions;
