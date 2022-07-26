export interface ProductCreateDto {
	title: string;
	subtitle: string;
	price: number;
	oldPrice?: number;
	imgUrl: string;
}
