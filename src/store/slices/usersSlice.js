import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUser";

const usersSlice = createSlice({
    name:'users',
    initialState:{
      data:[],
			isLoading: false,
			error: null,
    },
    extraReducers(builder) {
			builder.addCase(fetchUsers.pending);
			builder.addCase(fetchUsers.fulfilled);
			builder.addCase(fetchUsers.rejected);
		}
});

export const userReducer = usersSlice.reducer