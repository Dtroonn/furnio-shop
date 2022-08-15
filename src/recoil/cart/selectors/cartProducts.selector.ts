import { fetchCartProductsRequest } from './../../../api/cart/index';
import { ReturnedCartProductFromRespository } from './../../../../server/cartProducts/types/returnedCartProductFromRespository.type';
import { selector } from 'recoil';
import { cartProductsCountState } from '../states/cartProductsCount.state';

export const cartProductsSelectorQuery = selector<ReturnedCartProductFromRespository[]>({
	key: 'cartProductsSelectorQuery',
	get: async () => {
		const products = await fetchCartProductsRequest();
		return products;
	},
});
