import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissionData = createAsyncThunk(
  'Missions/getMissionItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const initialState = {
  missionItem: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missionItem = action.payload;
      })
      .addCase(getMissionData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default missionSlice.reducer;
