import React from 'react';

export const useOutsideClick = (
	ref: React.MutableRefObject<HTMLElement | null>,
	cb: () => void,
): void => {
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				cb();
			}
		};

		document.addEventListener('click', handleClickOutside);
		return (): void => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref]);
};
