import { BIND_TYPES } from './../bindTypes';

import { inject, injectable } from 'inversify';
import { ICartProductsService } from './cartProducts.service.interface';
import { ICartProductsRepository } from './cartProducts.repository.interface';
import { CartProductAddDto } from './dto/cartProductAdd.dto';
import { CartProductEntity } from './cartProduct.entity';
import { ReturnedCartProductFromRespository } from './types/returnedCartProductFromRespository.type';

@injectable()
export class CartProductsService implements ICartProductsService {
	constructor(
		@inject(BIND_TYPES.ICartProductsRepository)
		private cartProductsRepository: ICartProductsRepository,
	) {}

	async add(
		data: CartProductAddDto,
		sessionId: string,
		userId: number | null,
	): Promise<ReturnedCartProductFromRespository> {
		const candidate = await this.cartProductsRepository.findBySessionIdAndUserIdAndId(
			data.id,
			userId ? null : sessionId,
			userId ? userId : null,
		);
		if (candidate) {
			const product = new CartProductEntity(candidate);
			product.setCount(data.count);
			return this.cartProductsRepository.update(product);
		}

		const product = new CartProductEntity({
			count: data.count,
			productId: data.id,
			sessionId: userId ? null : sessionId,
			userId: userId || null,
		});
		return this.cartProductsRepository.create(product);
	}

	async delete(
		id: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<{ count: number }> {
		if (userId) {
			return this.cartProductsRepository.delete(id, null, userId);
		}

		return this.cartProductsRepository.delete(id, sessionId, null);
	}

	async get(
		page: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	): Promise<ReturnedCartProductFromRespository[]> {
		const skip = (page - 1) * limit;

		let products;

		if (userId) {
			products = await this.cartProductsRepository.findMany(skip, limit, null, userId);
		} else {
			products = await this.cartProductsRepository.findMany(skip, limit, sessionId, null);
		}

		return products;
	}

	async getСount(sessionId: string | null, userId: number | null): Promise<number> {
		let count: number;
		if (userId) {
			count = await this.cartProductsRepository.getСount(null, userId);
		} else {
			count = await this.cartProductsRepository.getСount(sessionId, null);
		}

		return count;
	}

	async updateCartProductsUserIdBySessionId(
		sessionId: string,
		userId: number,
	): Promise<{ count: number }> {
		return this.cartProductsRepository.updateItemsUserIdBySessionId(sessionId, userId);
	}
}
