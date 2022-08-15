import { ReturnedCartProductFromRespository } from './../../../../server/cartProducts/types/returnedCartProductFromRespository.type';
import { selector, noWait } from 'recoil';
import { cartProductsSelectorQuery } from './cartProducts.selector';

export interface ISuccessCartProductsPriceSelectorState {
	status: 'SUCCESS';
	data: number;
}

export interface ILoadingCartProductsPriceSelectorState {
	status: 'LOADING';
}

export interface IErrorCartProductsPriceSelectorState {
	status: 'ERROR';
	message: string;
}

export type ICartProductsPriceSelectorState =
	| ISuccessCartProductsPriceSelectorState
	| ILoadingCartProductsPriceSelectorState
	| IErrorCartProductsPriceSelectorState;

export const cartProductsPriceSelector = selector<ICartProductsPriceSelectorState>({
	key: 'cartProductsPriceSelector',
	get: ({ get }) => {
		const cartProductsLoadable = get(noWait(cartProductsSelectorQuery));

		if (cartProductsLoadable.state === 'loading') {
			return {
				status: 'LOADING',
			};
		}

		if (cartProductsLoadable.state === 'hasValue') {
			return {
				status: 'SUCCESS',
				data: cartProductsLoadable.contents.reduce(
					(prev, cartProduct) => prev + cartProduct.product.price,
					0,
				),
			};
		}

		if (cartProductsLoadable.state === 'hasError') {
			return {
				status: 'ERROR',
				message: 'Не удалось получить информацию, попробуйте позже',
			};
		}

		//Это сделано для того, чтобы сказать ts, что здесь never чтобы он не ругался на то, что возвращаемое значение может быть undefined
		//Т.к заренее известно что такого кейса не будет
		throw new Error('');
	},
});
