import { cartProductsCountState } from 'recoil/cart/states/cartProductsCount.state';
import { useSetRecoilState } from 'recoil';
import { ReturnedCartProductFromRespository } from './../../../../server/cartProducts/types/returnedCartProductFromRespository.type';
import { addItemToCartRequest } from './../../../api/cart/index';

export const useAddItemToCartTask = (): ((
	productId: number,
) => Promise<ReturnedCartProductFromRespository | null>) => {
	const setCartProductsCount = useSetRecoilState(cartProductsCountState);

	const addItemToCart = async (
		productId: number,
	): Promise<ReturnedCartProductFromRespository | null> => {
		try {
			//Пока что будем добавлять всегда один товар в корзину
			const cartProduct = await addItemToCartRequest(productId, 1);
			setCartProductsCount((prev) => prev + 1);
			return cartProduct;
		} catch (e) {
			window.alert('Произошла ошибка при добавлении товара в корзину');
			return null;
		}
	};

	return addItemToCart;
};
