import React from 'react';
import { useRecoilRefresher_UNSTABLE, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { authUserState } from 'recoil/auth/states/authUser.state';
import { cartProductsSelectorQuery } from 'recoil/cart/selectors/cartProducts.selector';
import {
	cartProductsPriceSelector,
	ICartProductsPriceSelectorState,
	IErrorCartProductsPriceSelectorState,
	ISuccessCartProductsPriceSelectorState,
} from 'recoil/cart/selectors/cartProductsPrice.selector';
import { CircularProgress } from 'ui-kit/CircularProgress';
import { Text } from 'ui-kit/Text';
import classes from './CartPage.module.scss';
export const CartPage: React.FC = () => {
	const user = useRecoilValue(authUserState);
	const cartPriceLoadable = useRecoilValueLoadable(cartProductsPriceSelector);
	const refreshCartProducts = useRecoilRefresher_UNSTABLE(cartProductsSelectorQuery);

	//Так задумано, ибо так работает корректно
	React.useEffect(() => {
		refreshCartProducts();
		return () => {
			refreshCartProducts();
		};
	}, []);

	if ((cartPriceLoadable.contents as ICartProductsPriceSelectorState).status === 'LOADING') {
		return (
			<div className={classes.cartPage}>
				<CircularProgress color="orange" size="big" />
			</div>
		);
	}

	if ((cartPriceLoadable.contents as ICartProductsPriceSelectorState).status === 'ERROR') {
		return (
			<div className={classes.cartPage}>
				<Text size="h4">
					{(cartPriceLoadable.contents as IErrorCartProductsPriceSelectorState).message}
				</Text>
			</div>
		);
	}

	return (
		<div className={classes.cartPage}>
			{(cartPriceLoadable.contents as ISuccessCartProductsPriceSelectorState).data ? (
				<Text size="h4">{`${
					user ? `${user.firstName}, в` : 'В'
				} вашей корзине  товаров на общую стоимость: Rp ${
					(cartPriceLoadable.contents as ISuccessCartProductsPriceSelectorState).data
				}`}</Text>
			) : (
				<Text size="h4">Ваша корзина пуста</Text>
			)}
		</div>
	);
};
