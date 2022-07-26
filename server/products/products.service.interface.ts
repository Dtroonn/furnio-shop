import { Product } from '@prisma/client';
import { ProductCreateDto } from './dto/productCreate.dto';

export interface IProductsService {
	create: (data: ProductCreateDto) => Promise<Product>;
	get: (page: number, limit: number) => Promise<Product[]>;
}
