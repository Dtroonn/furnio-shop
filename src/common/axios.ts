import { API_AUTH_REFRESH_ENDPOINT } from './constans';
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { setUser } from 'redux/ducks/auth/authSlice';

import { store } from 'redux/store';

export const axiosInstance = axios.create({
	withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
	}

	return config;
});

axios.interceptors.response.use(
	(config) => config,
	async (err: AxiosError) => {
		const dispatch = store.dispatch;
		if (err.response?.status === 401) {
			try {
				const res = await axios.get(API_AUTH_REFRESH_ENDPOINT, {
					withCredentials: true,
				});

				localStorage.setItem('accessToken', res.data.accessToken);
				return axiosInstance.request(err.config);
			} catch (e) {
				dispatch(setUser(null));
				throw err;
			}
		}

		throw err;
	},
);
