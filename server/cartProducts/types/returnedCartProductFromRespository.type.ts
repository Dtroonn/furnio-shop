import { CartProduct, Product } from '@prisma/client';

export type ReturnedCartProductFromRespository = Pick<CartProduct, 'id' | 'count'> & {
	product: Product;
};
