import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { inject, injectable } from 'inversify';
import { IProductsRepository } from './products.repository.interface';
import { Product } from '@prisma/client';
import { ProductEntity } from './product.entity';
import { IReturnedProductFromRepository } from './types/ReturnedProductFromRepository.type';

@injectable()
export class ProductsRepository implements IProductsRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(product: ProductEntity): Promise<IReturnedProductFromRepository> {
		return this.prismaService.client.product.create({
			data: product.data,
			include: {
				CartProduct: {
					select: {
						id: true,
						count: true,
					},
				},
			},
		});
	}

	async findMany(
		skip: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<IReturnedProductFromRepository[]> {
		return this.prismaService.client.product.findMany({
			skip,
			take: limit,
			include: {
				CartProduct: {
					where: {
						sessionId,
						userId,
					},
					select: {
						id: true,
						count: true,
					},
				},
			},
		});
	}

	async getCount(): Promise<number> {
		return this.prismaService.client.product.count();
	}
}
