import { fetchCheckAuth } from './thunks';
import { User } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './contracts/authState.interface';

const initialState: IAuthState = {
	user: null,
	checkAuthLoadingStatus: 'NEVER',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<Omit<User, 'password'> | null>) => {
			state.user = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCheckAuth.pending, (state) => {
			state.checkAuthLoadingStatus = 'LOADING';
		});

		builder.addCase(fetchCheckAuth.fulfilled, (state, { payload }) => {
			state.user = payload;
			state.checkAuthLoadingStatus = 'SUCCESS';
		});

		builder.addCase(fetchCheckAuth.rejected, (state) => {
			state.checkAuthLoadingStatus = 'ERROR';
		});
	},
});

export const { setUser } = authSlice.actions;
