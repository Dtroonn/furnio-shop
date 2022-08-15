import clsx from 'clsx';
import { Product } from 'components/Product';
import React from 'react';

import { Text } from 'ui-kit/Text';

import classes from './Products.module.scss';

import roomPng from 'assets/room.png';
import bedjpg from 'assets/bed.jpg';
import { Button } from 'ui-kit/Button';
import { useFetchProductsTask } from 'recoil/products/tasks/useFetchProducts.task';
import { useIntersection } from 'hooks/useIntersection';
import { ProductSkeleton } from 'components/Product/ProductSkeleton';
import { useAddItemToCartTask } from 'recoil/cart/tasks/useAddItemToCart.task';
import { useRecoilValue } from 'recoil';
import { currentProductsSelector } from 'recoil/products/selectors/currentProducts.selector';
import { useRemoveItemFromCartTask } from 'recoil/cart/tasks/useRemoveItemFromCart.task';
import { findProductIndexById, findProductsPageByProductId } from './helpers';

const mockItems = [
	{
		imgUrl: bedjpg,
		name: 'Syltherine',
		description: 'Stylish cafe chair',
		price: 292191293.22,
	},
	{
		imgUrl: roomPng,
		name: 'Syltherine',
		description: 'Stylish cafe chair',
		price: 292191293.22,
		oldPrice: 121312,
	},
	{
		imgUrl: roomPng,
		name: 'Syltherine',
		description: 'Stylish cafe chair',
		price: 292191293.22,
	},
	{
		imgUrl: roomPng,
		name: 'Syltherine',
		description: 'Stylish cafe chair Stylish cafe chair Stylish cafe chair Stylish',
		price: 292191293.22,
		oldPrice: 1213123123132,
	},
	{
		imgUrl: roomPng,
		name: 'Syltherine',
		description: 'Stylish cafe chair',
		price: 292191293.22,
	},
	{
		imgUrl: roomPng,
		name: 'Syltherine',
		description: 'Stylish cafe chair',
		price: 292191293.22,
		oldPrice: 1213123123132,
	},
];

const LIMIT = 4;

export const Products: React.FC = () => {
	const contentRef = React.useRef<HTMLDivElement>(null);
	const pageNumberRef = React.useRef(1);
	const addItemToCart = useAddItemToCartTask();
	const removeItemFromCart = useRemoveItemFromCartTask();

	const products = useRecoilValue(currentProductsSelector);

	const { fetchProducts, loadingStatus, totalCount, setProductsDataByPages } =
		useFetchProductsTask();

	//Задумано, что юзер может посмотреть только 3 страницы
	const isDisplayShowMoreBtn =
		totalCount !== null && products.length < totalCount && pageNumberRef.current < 3;
	const isDisplayRollupBtn = pageNumberRef.current !== 1 && !isDisplayShowMoreBtn;

	const onFetchProducts = (): void => {
		fetchProducts(pageNumberRef.current, LIMIT);
	};

	useIntersection(
		{ targetRef: contentRef, onIntersected: onFetchProducts },
		{
			threshold: 0.1,
		},
	);

	const handleClickShowMoreProducts = (): void => {
		const nextPage = pageNumberRef.current + 1;
		pageNumberRef.current = nextPage;
		onFetchProducts();
	};

	const handleClickRollupProducts = (): void => {
		pageNumberRef.current = 1;
		onFetchProducts();
	};

	const handleAddToCart = async (id: number): Promise<void> => {
		const cartProduct = await addItemToCart(id);
		if (cartProduct) {
			setProductsDataByPages((prev) => {
				const { pagesWithData } = prev;

				const productsPage: number = findProductsPageByProductId(
					pagesWithData,
					cartProduct.product.id,
				);

				const newPagesWithData = {
					...pagesWithData,
				};
				const newProductsForPage = [...newPagesWithData[productsPage].data];
				const productIdx = findProductIndexById(newProductsForPage, cartProduct.product.id);
				newProductsForPage[productIdx] = {
					...newProductsForPage[productIdx],
					CartProduct: [cartProduct],
				};
				newPagesWithData[productsPage] = {
					...newPagesWithData[productsPage],
					data: newProductsForPage,
				};

				return {
					...prev,
					pagesWithData: newPagesWithData,
				};
			});
		}
	};

	const handleRemoveFromCart = async (cartProductId: number, productId: number): Promise<void> => {
		await removeItemFromCart(cartProductId);
		setProductsDataByPages((prev) => {
			const { pagesWithData } = prev;

			const productsPage: number = findProductsPageByProductId(pagesWithData, productId);

			const newPagesWithData = {
				...pagesWithData,
			};
			const newProductsForPage = [...newPagesWithData[productsPage].data];
			const productIdx = findProductIndexById(newProductsForPage, productId);
			newProductsForPage[productIdx] = {
				...newProductsForPage[productIdx],
				CartProduct: [],
			};
			newPagesWithData[productsPage] = {
				...newPagesWithData[productsPage],
				data: newProductsForPage,
			};

			return {
				...prev,
				pagesWithData: newPagesWithData,
			};
		});
	};

	const isShowSkeleton = loadingStatus === 'NEVER' || loadingStatus === 'LOADING';

	return (
		<div className={clsx(classes.products)} ref={contentRef}>
			<div className="_container">
				<Text className={classes['products__title']} size="h2">
					Our Products
				</Text>

				<div className={classes['products__row']}>
					{!!products.length &&
						products.map((product, index) => (
							<div key={product.id} className={classes['products__column']}>
								<Product
									id={product.id}
									imgUrl={product.imgUrl}
									name={product.title}
									description={product.subtitle}
									price={product.price}
									oldPrice={product.oldPrice}
									onAddToCart={handleAddToCart}
									onRemoveFromCart={handleRemoveFromCart}
									cartProduct={product.CartProduct[0]}
								/>
							</div>
						))}

					{isShowSkeleton &&
						new Array(4).fill(0).map((product, index) => (
							<div key={index} className={classes['products__column']}>
								<ProductSkeleton />
							</div>
						))}
				</div>

				{isDisplayShowMoreBtn && (
					<Button
						onClick={handleClickShowMoreProducts}
						outline
						color="white"
						className={clsx(classes['products__btn'])}
					>
						Show More
					</Button>
				)}
				{isDisplayRollupBtn && (
					<Button
						onClick={handleClickRollupProducts}
						outline
						color="white"
						className={clsx(classes['products__btn'])}
					>
						Roll up
					</Button>
				)}
			</div>
		</div>
	);
};
