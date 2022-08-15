import { CartProductAddDto } from './dto/cartProductAdd.dto';
import { CartProduct } from '@prisma/client';
import { ReturnedCartProductFromRespository } from './types/returnedCartProductFromRespository.type';

export interface ICartProductsService {
	add: (
		data: CartProductAddDto,
		sessionId: string,
		userId: number | null,
	) => Promise<ReturnedCartProductFromRespository>;
	get: (
		page: number,
		limit: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<ReturnedCartProductFromRespository[]>;

	delete: (
		id: number,
		sessionId: string | null,
		userId: number | null,
	) => Promise<{ count: number }>;

	getСount: (sessionId: string | null, userId: number | null) => Promise<number>;

	updateCartProductsUserIdBySessionId: (
		sessionId: string,
		userId: number,
	) => Promise<{ count: number }>;
}
