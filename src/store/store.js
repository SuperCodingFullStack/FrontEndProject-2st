import { configureStore } from '@reduxjs/toolkit';
import popBoolSlice from './slice/popBoolSlice';
import activeSlice from './slice/activeSlice';

export const store = configureStore({
  reducer: {
    popBools: popBoolSlice.reducer,
    activing: activeSlice.reducer,
  },
});
