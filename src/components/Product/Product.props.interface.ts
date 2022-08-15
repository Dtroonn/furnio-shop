export interface IProductProps {
	id: number;
	imgUrl: string;
	name: string;
	description: string;
	price: number;
	oldPrice?: number | null;
	onAddToCart?: (id: number) => Promise<void>;
	onRemoveFromCart?: (cartProductId: number, productId: number) => Promise<void>;
	cartProduct?: {
		id: number;
		count: number;
	};
}
