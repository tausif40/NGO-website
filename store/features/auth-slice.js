import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/lib/apiClient';

// Login User
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const response = await apiClient.post('/auth/login-admin', credentials);
		return response.data;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			//login
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	},
});

export default authSlice.reducer;
