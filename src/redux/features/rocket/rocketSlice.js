import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rocketsData = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
    reserved: false,
  }));
  return rocketsData;
});

export const rocketSlice = createSlice(
  {
    name: 'rocket',
    initialState,
    reducers: {
      reserveRocket: (state, action) => {
        state.rockets = state.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: true };
        });
      },
      cancelReservation: (state, action) => {
        state.rockets = state.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: false };
        });
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
        state.error = '';
      });
      builder.addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.rockets = [];
        state.error = action.error.message;
      });
    },
  },
);

export const { reserveRocket, cancelReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
