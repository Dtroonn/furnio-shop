import { productsDataByPagesState } from './../states/products.state';
import { IReturnedProductFromRepository } from './../../../../server/products/types/ReturnedProductFromRepository.type';
import { selector } from 'recoil';

export const currentProductsSelector = selector<IReturnedProductFromRepository[]>({
	key: 'currentProductsSelector',
	get: ({ get }) => {
		const productsDataByPages = get(productsDataByPagesState);
		let products: IReturnedProductFromRepository[] = [];
		Object.values(productsDataByPages.pagesWithData).forEach((item) => {
			if (item.includeInCurrentProducts) {
				products = [...products, ...item.data];
			}
		});

		return products;
	},
});
