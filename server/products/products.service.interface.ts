import { IReturnedProductFromRepository } from './types/ReturnedProductFromRepository.type';
import { Product } from '@prisma/client';
import { ProductCreateDto } from './dto/productCreate.dto';

export interface IProductsService {
	create: (data: ProductCreateDto) => Promise<IReturnedProductFromRepository>;
	get: (
		page: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<IReturnedProductFromRepository[]>;
	getCount: () => Promise<number>;
}
