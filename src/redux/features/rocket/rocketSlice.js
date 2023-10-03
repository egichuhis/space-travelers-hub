import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data;
});

export const rocketSlice = createSlice(
  {
    name: 'rocket',
    initialState,
    reducers: {
      removeRocket: (state, action) => {
        state.rockets = state.rockets.filter(
          (book) => book.itemId !== action.payload,
        );
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = Object.values(action);
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

export default rocketSlice.reducer;
