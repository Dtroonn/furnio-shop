import { CartProduct, Product } from '@prisma/client';

export interface ICartProductEntityData extends Omit<CartProduct, 'id'> {
	id?: number;
}

export class CartProductEntity {
	private readonly _data: ICartProductEntityData;

	constructor(product: ICartProductEntityData) {
		this._data = product;
	}

	get data(): Readonly<ICartProductEntityData> {
		return this._data;
	}

	setCount(value: number): void {
		this._data.count = value;
	}
}
