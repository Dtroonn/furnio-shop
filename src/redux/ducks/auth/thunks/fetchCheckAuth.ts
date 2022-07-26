import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshAuthRequest } from 'api/users';

export const fetchCheckAuth = createAsyncThunk('auth/fetchCheckAuth', async (_, { dispatch }) => {
	const data = await refreshAuthRequest();
	localStorage.setItem('accessToken', data.accessToken);
	return data.user;
});
