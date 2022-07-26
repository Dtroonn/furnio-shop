import { Product } from '@prisma/client';

export interface IProductEntityData extends Omit<Product, 'id'> {
	id?: number;
}

export class ProductEntity {
	private readonly _data: IProductEntityData;

	constructor(product: IProductEntityData) {
		this._data = product;
	}

	get data(): Readonly<IProductEntityData> {
		return this._data;
	}
}
