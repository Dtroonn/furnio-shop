import { Product } from '@prisma/client';

export interface IReturnedProductFromRepository extends Product {
	CartProduct: {
		id: number;
		count: number;
	}[];
}
