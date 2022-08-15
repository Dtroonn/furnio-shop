import { Product } from '@prisma/client';
import { axiosInstance } from 'common/axios';
import { getProductsRes } from './contracts/getProductsRes.interface';

export const getProductsRequest = async (page: number, limit: number): Promise<getProductsRes> => {
	const res = await axiosInstance.get<getProductsRes>('/api/products', {
		params: {
			page,
			limit,
		},
	});
	return res.data;
};
