import { BIND_TYPES } from './../bindTypes';
import { Product } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IProductsService } from './products.service.interface';
import { IProductsRepository } from './products.repository.interface';
import { ProductCreateDto } from './dto/productCreate.dto';
import { ProductEntity } from './product.entity';

@injectable()
export class ProductsService implements IProductsService {
	constructor(
		@inject(BIND_TYPES.IProductsRepository) private productsRepository: IProductsRepository,
	) {}

	async create(data: ProductCreateDto): Promise<Product> {
		const product = new ProductEntity({
			...data,
			oldPrice: null,
		});

		return this.productsRepository.create(product);
	}

	async get(page: number, limit: number): Promise<Product[]> {
		const skip = (page - 1) * limit;

		return this.productsRepository.findMany(skip, limit);
	}
}
