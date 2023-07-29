import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64c36d93eb7fd5d6ebd0dc4e.mockapi.io";

export const featchUsers = createAsyncThunk(
  "user",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const featchUsersADD = createAsyncThunk(
  "user/add",
  async (users, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${users.id}`, users);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
