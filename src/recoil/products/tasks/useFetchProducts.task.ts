import { productsDataByPagesState } from './../states/products.state';
import { getProductsRequest } from 'api/products';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { IProductsDataByPagesState } from '../states/products.state';

export interface IReturnedUseFetchProductsTask {
	fetchProducts: (page: number, limit: number) => Promise<void>;
	loadingStatus: 'NEVER' | 'LOADING' | 'SUCCESS';
	totalCount: number | null;
	setProductsDataByPages: ReturnType<typeof useSetRecoilState<IProductsDataByPagesState>>;
}

export const useFetchProductsTask = (): IReturnedUseFetchProductsTask => {
	const [productsDataByPages, setProductsDataByPages] = useRecoilState(productsDataByPagesState);

	//Предполагаю, что limit пока что меняться на лету не будет
	//Если такой кейс возникнет, логику надо будет поменять
	//Так же предполагается что если есть например страница 3, то все страницы до этого уже были получены
	//Логика заточена для запросов, где страница меняется инкрементально. Либо в обратную сторону резко/декрементально
	const fetchProducts = async (page: number, limit: number): Promise<void> => {
		try {
			const { pagesWithData } = productsDataByPages;
			if (Object.prototype.hasOwnProperty.call(productsDataByPages.pagesWithData, page)) {
				const newPagesWithData = {
					...pagesWithData,
				};

				const pagesNumbers: string[] = Object.keys(newPagesWithData);

				for (
					let currentPage = 1;
					currentPage <= Number(pagesNumbers[pagesNumbers.length - 1]);
					currentPage++
				) {
					newPagesWithData[currentPage] = {
						...newPagesWithData[currentPage],
						includeInCurrentProducts: currentPage <= page ? true : false,
					};
				}

				setProductsDataByPages((prev) => ({
					...prev,
					pagesWithData: newPagesWithData,
				}));
				return;
			}

			setProductsDataByPages((prev) => ({
				...prev,
				loadingStatus: 'LOADING',
			}));
			const { data, count } = await getProductsRequest(page, limit);
			setProductsDataByPages((prev) => ({
				...prev,
				pagesWithData: {
					...prev.pagesWithData,
					[page]: {
						data,
						includeInCurrentProducts: true,
					},
				},
				totalCount: count,
				loadingStatus: 'SUCCESS',
			}));
		} catch (e) {
			window.alert('Что-то пошло не так при загрузке товаров');
		}
	};

	return {
		fetchProducts,
		loadingStatus: productsDataByPages.loadingStatus,
		totalCount: productsDataByPages.totalCount,
		setProductsDataByPages,
	};
};
