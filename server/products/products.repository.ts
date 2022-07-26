import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { inject, injectable } from 'inversify';
import { IProductsRepository } from './products.repository.interface';
import { Product } from '@prisma/client';
import { ProductEntity } from './product.entity';

@injectable()
export class ProductsRepository implements IProductsRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(product: ProductEntity): Promise<Product> {
		return this.prismaService.client.product.create({
			data: product.data,
		});
	}

	async findMany(skip: number, limit: number): Promise<Product[]> {
		return this.prismaService.client.product.findMany({
			skip,
			take: limit,
		});
	}
}
