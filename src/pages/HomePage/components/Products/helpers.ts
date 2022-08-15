import { IReturnedProductFromRepository } from './../../../../../server/products/types/ReturnedProductFromRepository.type';
import { IProductsDataByPagesState } from 'recoil/products/states/products.state';

export const findProductsPageByProductId = (
	pagesWithData: IProductsDataByPagesState['pagesWithData'],
	productId: number,
): number => {
	const productsData = Object.values(pagesWithData).map((item) => {
		return item.data;
	});
	const productsPage: number =
		productsData.findIndex((products) => products.find((product) => product.id === productId)) + 1;

	return productsPage;
};

export const findProductIndexById = (
	products: IReturnedProductFromRepository[],
	productId: number,
): number => {
	return products.findIndex((product) => product.id === productId);
};
