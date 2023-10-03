import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rockets/rocketsSlice';

export const store = configureStore(
  {
    reducer: {
      rockets: rocketsReducer,
    },
  },
);

export default store;
