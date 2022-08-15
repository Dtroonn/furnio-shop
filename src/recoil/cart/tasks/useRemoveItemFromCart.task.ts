import { cartProductsCountState } from 'recoil/cart/states/cartProductsCount.state';
import { useSetRecoilState } from 'recoil';
import { removeItemFromCartRequest } from './../../../api/cart/index';

export const useRemoveItemFromCartTask = (): ((id: number) => Promise<void>) => {
	const setCartProductsCount = useSetRecoilState(cartProductsCountState);

	const removeItemFromCart = async (id: number): Promise<void> => {
		try {
			//Т.к добавляется по одному товару. Удаляться тоже будет по одному
			await removeItemFromCartRequest(id);
			setCartProductsCount((prev) => prev - 1);
		} catch (e) {
			window.alert('Произошла ошибка при удалении товара из корзины');
		}
	};

	return removeItemFromCart;
};
