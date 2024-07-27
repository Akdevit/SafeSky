// src/features/example/exampleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for making an API call
export const fetchweatherforcastData = createAsyncThunk(
  "weather/fetchweatherforcastData",
  async (q) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=2414caecc6c57d285a1f1b4e88cd0a78`
    );
    return response.data;
  }
);

const weatherforcstSlice = createSlice({
  name: "weatherforcast",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchweatherforcastData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchweatherforcastData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchweatherforcastData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherforcstSlice.reducer;
