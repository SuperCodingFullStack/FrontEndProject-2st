import { createSlice } from "@reduxjs/toolkit";

const dragSlice = createSlice({
  name: "drag",
  initialState: {
    isDraggable: false,
    positionX: 0,
    productPositionX: 0,
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
    },
    setProductPosit(state, action) {
      state.productPositionX = action.payload.x;
    },
  },
});

export default dragSlice;

export const dragActions = dragSlice.actions;
