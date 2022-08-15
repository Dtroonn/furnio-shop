import { ReturnedCartProductFromRespository } from './../../../server/cartProducts/types/returnedCartProductFromRespository.type';
import { axiosInstance } from 'common/axios';
import { IReturnedProductFromRepository } from '../../../server/products/types/ReturnedProductFromRepository.type';

export const addItemToCartRequest = async (
	productId: number,
	count: number,
): Promise<ReturnedCartProductFromRespository> => {
	const res = await axiosInstance.post<ReturnedCartProductFromRespository>('api/cart-products', {
		id: productId,
		count,
	});
	return res.data;
};

export const removeItemFromCartRequest = async (id: number): Promise<void> => {
	await axiosInstance.delete(`api/cart-products/${id}`);
	return;
};

export const fetchCartProductsRequest = async (): Promise<ReturnedCartProductFromRespository[]> => {
	const res = await axiosInstance.get<ReturnedCartProductFromRespository[]>('api/cart-products');
	return res.data;
};
