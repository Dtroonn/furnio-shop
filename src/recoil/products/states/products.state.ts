import { IReturnedProductFromRepository } from './../../../../server/products/types/ReturnedProductFromRepository.type';
import { atom } from 'recoil';
import { Product } from '@prisma/client';

interface productsPageData {
	data: IReturnedProductFromRepository[];
	includeInCurrentProducts: boolean;
}

export interface IProductsDataByPagesState {
	pagesWithData: {
		[key: string]: productsPageData;
	};
	// currentData: IReturnedProductFromRepository[];
	totalCount: number | null;
	loadingStatus: 'NEVER' | 'LOADING' | 'SUCCESS';
}

export const productsDataByPagesState = atom<IProductsDataByPagesState>({
	key: 'productsState',
	default: {
		pagesWithData: {},
		// currentData: [],
		totalCount: null,
		loadingStatus: 'NEVER',
	},
});
