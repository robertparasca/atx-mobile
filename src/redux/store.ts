import {configureStore} from '@reduxjs/toolkit';
// import exampleSlice from './slices/example';
import exampleReducer from './slices/example';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
