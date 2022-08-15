import { IReturnedProductFromRepository } from './../../../../server/products/types/ReturnedProductFromRepository.type';
import { Product } from '@prisma/client';

export interface getProductsRes {
	data: IReturnedProductFromRepository[];
	count: number;
}
