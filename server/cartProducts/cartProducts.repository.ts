import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { inject, injectable } from 'inversify';
import { ICartProductsRepository } from './cartProducts.repository.interface';
import { Product, CartProduct } from '@prisma/client';
import { CartProductEntity } from './cartProduct.entity';
import { ReturnedCartProductFromRespository } from './types/returnedCartProductFromRespository.type';

@injectable()
export class CartProductsRepository implements ICartProductsRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(product: CartProductEntity): Promise<ReturnedCartProductFromRespository> {
		return this.prismaService.client.cartProduct.create({
			data: {
				count: product.data.count,
				productId: product.data.productId,
				sessionId: product.data.sessionId,
				userId: product.data.userId,
			},
			select: {
				id: true,
				count: true,
				product: true,
			},
		});
	}

	async update(product: CartProductEntity): Promise<ReturnedCartProductFromRespository> {
		return this.prismaService.client.cartProduct.update({
			where: {
				id: product.data.id,
			},
			data: product.data,
			select: {
				id: true,
				count: true,
				product: true,
			},
		});
	}

	async delete(
		id: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<{ count: number }> {
		//Использую many т.к в нем необязательны уникальные userId и sessionId
		return this.prismaService.client.cartProduct.deleteMany({
			where: {
				id,
				userId,
				sessionId,
			},
		});
	}

	async findMany(
		skip: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<ReturnedCartProductFromRespository[]> {
		return this.prismaService.client.cartProduct.findMany({
			skip,
			take: limit,
			select: {
				id: true,
				count: true,
				product: true,
			},

			where: {
				sessionId,
				userId,
			},
		});
	}

	async findBySessionIdAndUserIdAndId(
		id: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<CartProduct | null> {
		return this.prismaService.client.cartProduct.findFirst({
			where: {
				productId: id,
				sessionId,
				userId,
			},
		});
	}

	async getСount(sessionId: string | null, userId: number | null): Promise<number> {
		return this.prismaService.client.cartProduct.count({
			where: {
				sessionId,
				userId,
			},
		});
	}

	async updateItemsUserIdBySessionId(
		sessionId: string,
		userId: number,
	): Promise<{ count: number }> {
		return this.prismaService.client.cartProduct.updateMany({
			where: {
				sessionId,
			},
			data: {
				userId,
				sessionId: null,
			},
		});
	}
}
