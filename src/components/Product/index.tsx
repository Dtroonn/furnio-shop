import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import { Button } from 'ui-kit/Button';
import { Icon } from 'ui-kit/Icon';
import { AdaptiveImage } from 'ui-kit/Image';
import { Text } from 'ui-kit/Text';

import classes from './Product.module.scss';
import { IProductProps } from './Product.props.interface';

export const Product: React.FC<IProductProps> = ({
	id,
	imgUrl,
	name,
	description,
	price,
	oldPrice,
	onAddToCart,
	onRemoveFromCart,
	cartProduct,
}) => {
	const [isLoading, setIsLoading] = React.useState(false);

	const [showBackgroundContent, setShowBackgroundContent] = React.useState(false);
	const touchStartCoordsRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });

	const handleMouseEnter = (): void => {
		setShowBackgroundContent(true);
	};

	const handleMouseLeave = (): void => {
		setShowBackgroundContent(false);
	};

	const handleTouchStart = (event: React.TouchEvent): void => {
		touchStartCoordsRef.current.x = event.changedTouches[0].screenX;
		touchStartCoordsRef.current.y = event.changedTouches[0].screenY;
	};

	const handleTouchEnd = (event: React.TouchEvent): void => {
		if (touchStartCoordsRef.current.x - event.changedTouches[0].screenX > 50) {
			setShowBackgroundContent(true);
		}
	};

	const handleClickAddToCart = async (): Promise<void> => {
		if (onAddToCart) {
			setIsLoading(true);
			await onAddToCart(id);
			setIsLoading(false);
		}
	};

	const handleClickRemoveFromCart = async (): Promise<void> => {
		if (onRemoveFromCart && cartProduct) {
			setIsLoading(true);
			await onRemoveFromCart(cartProduct.id, id);
			setIsLoading(false);
		}
	};

	return (
		<div
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={classes.product}
		>
			<div className={classes['product__content']}>
				<AdaptiveImage url={imgUrl} className={classes['product__image']}>
					<div className={classes['product__labels']}>
						<div className={classes['product__label']}>
							<Text color="white" size="body3">
								-30%
							</Text>
						</div>
					</div>
				</AdaptiveImage>
				<div className={classes['product__body']}>
					<Text className={classes['product__title']} size="h5">
						{name}
					</Text>
					<Text className={classes['product__subtitle']} size="body3" color="gray">
						{description}
					</Text>
					<div className={classes['product__prices']}>
						<Text
							className={clsx(classes['product__price'], {
								[classes['product__price_mr']]: oldPrice,
							})}
							size="body1"
						>
							Rp {price}
						</Text>
						{oldPrice && (
							<Text className={classes['product__old-price']} size="body4" color="lightGray">
								Rp {oldPrice}
							</Text>
						)}
					</div>
				</div>
			</div>
			<div
				className={clsx(classes['background-content'], {
					[classes.active]: showBackgroundContent,
				})}
			>
				<div className={classes['background-content__body']}>
					<Button
						loading={isLoading}
						onClick={cartProduct ? handleClickRemoveFromCart : handleClickAddToCart}
						color={cartProduct ? 'red' : 'white'}
						className={classes['background-content__btn']}
					>
						{cartProduct ? 'Remove from cart' : 'Add to cart'}
					</Button>
					<div className={classes['background-content__actions']}>
						<div
							className={clsx(
								classes['background-content-action'],
								classes['background-content-action_share'],
							)}
						>
							<Icon className={classes['background-content-action__icon']} icon="share" />
							<div className={classes['background-content-action__text']}>Share</div>
						</div>
						<div
							className={clsx(
								classes['background-content-action'],
								classes['background-content-action_like'],
							)}
						>
							<Icon
								className={clsx(
									classes['background-content-action__icon'],
									classes['background-content-action__icon_like'],
								)}
								icon="like"
							/>
							<div className={classes['background-content-action__text']}>Like</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
