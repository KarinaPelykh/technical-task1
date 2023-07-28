import { createSlice } from "@reduxjs/toolkit";
import { featchUsers } from "./operation";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(featchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(featchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(featchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const userReducer = userSlice.reducer;
