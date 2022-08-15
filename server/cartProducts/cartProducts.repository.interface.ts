import { CartProductEntity } from './cartProduct.entity';
import { Product, CartProduct } from '@prisma/client';
import { ReturnedCartProductFromRespository } from './types/returnedCartProductFromRespository.type';

export interface ICartProductsRepository {
	create: (product: CartProductEntity) => Promise<ReturnedCartProductFromRespository>;

	findMany: (
		skip: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<ReturnedCartProductFromRespository[]>;

	update: (cartProduct: CartProductEntity) => Promise<ReturnedCartProductFromRespository>;

	delete: (
		id: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<{ count: number }>;

	findBySessionIdAndUserIdAndId: (
		id: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<CartProduct | null>;

	getСount: (sessionId: string | null, userId: number | null) => Promise<number>;

	updateItemsUserIdBySessionId: (sessionId: string, userId: number) => Promise<{ count: number }>;
}
