import { getActivitiesInfo } from 'api/users';
import { useSetRecoilState } from 'recoil';
import { cartProductsCountState } from 'recoil/cart/states/cartProductsCount.state';

export const useFetchActivitiesInfoTask = (): (() => Promise<void>) => {
	const setCartProductsCountState = useSetRecoilState(cartProductsCountState);

	const fetchActivitiesInfo = async (): Promise<void> => {
		const data = await getActivitiesInfo();
		setCartProductsCountState(data.cartProductsCount);
	};

	return fetchActivitiesInfo;
};
