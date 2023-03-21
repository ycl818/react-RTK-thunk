import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/feftch', async () => {
  const response = await axios.get('http://localhost:6666/users');

  return response.data;
});

export { fetchUsers };