import { ProductEntity } from './product.entity';
import { Product } from '@prisma/client';

export interface IProductsRepository {
	create: (product: ProductEntity) => Promise<Product>;
	findMany: (skip: number, limit: number) => Promise<Product[]>;
}
