import { createSlice } from "@reduxjs/toolkit";
import { featchUsers, featchUsersADD } from "./operation";
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
      })
      .addCase(featchUsersADD.fulfilled, (state, action) => {
        const { id, followers, isFollowed } = action.payload;
        const addUser = state.users.findIndex((user) => user.id === id);
        if (addUser !== -1) {
          state.users[addUser].followers = followers;
          state.users[addUser].isFollowed = isFollowed;
        } else {
          state.users.push(action.payload);
        }
        state.isLoading = false;
      })
      .addCase(featchUsersADD.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(featchUsersADD.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const userReducer = userSlice.reducer;
