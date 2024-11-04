import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    isLogged: false,
  },
  reducer: {
    setLogged(state) {
      state.isLogged = true;
    },
    setNoLogged(state) {
      state.isLogged = false;
    },
  },
});

export default loggedSlice;
export const loggedActions = loggedSlice.actions;
