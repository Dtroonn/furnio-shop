import { IReturnedProductFromRepository } from './types/ReturnedProductFromRepository.type';
import { ProductEntity } from './product.entity';
import { Product } from '@prisma/client';

export interface IProductsRepository {
	create: (product: ProductEntity) => Promise<IReturnedProductFromRepository>;
	findMany: (
		skip: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<IReturnedProductFromRepository[]>;
	getCount: () => Promise<number>;
}
