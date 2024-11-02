import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterAll: [
      {
        target: "가격순",
      },
      {
        target: "이름순",
      },
    ],
    activeFilter: 0,
  },
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export default filterSlice;

export const filterActions = filterSlice.actions;
