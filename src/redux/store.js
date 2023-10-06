import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rocket/rocketSlice';
import missionReducer from './features/missions/missionSlice';

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
