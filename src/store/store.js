import { configureStore } from "@reduxjs/toolkit";
import popBoolSlice from "./slice/popBoolSlice";
import activeSlice from "./slice/activeSlice";
import footMenuSlice from "./slice/footMenuSlice";
import dragSlice from "./slice/dragSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    popBools: popBoolSlice.reducer,
    activing: activeSlice.reducer,
    footMenu: footMenuSlice.reducer,
    drag: dragSlice.reducer,
    auth: authSlice.reducer,
  },
});
