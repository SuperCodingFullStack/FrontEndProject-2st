import { configureStore } from '@reduxjs/toolkit';
import popBoolSlice from './slice/popBoolSlice';

export const store = configureStore({
  reducer: {
    popBools: popBoolSlice.reducer,
  },
});
