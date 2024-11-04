import { configureStore } from "@reduxjs/toolkit";
import popBoolSlice from "./slice/popBoolSlice";
import activeSlice from "./slice/activeSlice";
import footMenuSlice from "./slice/footMenuSlice";
import dragSlice from "./slice/dragSlice";
<<<<<<< HEAD
import { enableMapSet } from "immer"; // Immer에서 enableMapSet 가져오기
import cartReducer from "./slice/cartSlice";

enableMapSet();
=======
import productSlice from "./slice/productSlice";
import loggedSlice from "./slice/loggedSlice";
import filterSlice from "./slice/filterSlice";
>>>>>>> be3ce8f4db460817ce18160a7ab991dd07694f95

export const store = configureStore({
  reducer: {
    popBools: popBoolSlice.reducer,
    activing: activeSlice.reducer,
    footMenu: footMenuSlice.reducer,
    drag: dragSlice.reducer,
<<<<<<< HEAD
    cart: cartReducer,
=======
    products: productSlice.reducer,
    log: loggedSlice.reducer,
    filter: filterSlice.reducer,
>>>>>>> be3ce8f4db460817ce18160a7ab991dd07694f95
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // serializableCheck 비활성화
    }),
});
