import { axiosInstance } from 'common/axios';
import { API_AUTH_REFRESH_ENDPOINT } from 'common/constans';
import { IAuthRes } from './contracts/AuthRes.interface';

export const refreshAuthRequest = async (): Promise<IAuthRes> => {
	const res = await axiosInstance.get<IAuthRes>(API_AUTH_REFRESH_ENDPOINT);
	return res.data;
};
