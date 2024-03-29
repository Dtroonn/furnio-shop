import { useLocation } from 'react-router-dom';

export const useGetParameter = (name: string): string | null => {
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search);
	return searchParams.get(name);
};
