import { atom } from 'recoil';

export const cartProductsCountState = atom<number>({
	key: 'cartProductsCount',
	default: 0,
});
