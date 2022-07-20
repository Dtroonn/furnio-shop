import React from 'react';

export const useBreakpoint = (type: 'min-width' | 'max-width', pixeles: number): boolean => {
	const mediaQueryList = window.matchMedia(`(${type}: ${pixeles}px)`);

	const [isBreakpoint, setIsBreakpoint] = React.useState(mediaQueryList.matches ? true : false);

	React.useEffect(() => {
		const handleBreakpointEvent = (e: MediaQueryListEvent) => {
			if (e.matches) {
				setIsBreakpoint(true);
			} else {
				setIsBreakpoint(false);
			}
		};
		mediaQueryList.addEventListener('change', handleBreakpointEvent);
		return () => {
			mediaQueryList.removeEventListener('change', handleBreakpointEvent);
		};
	}, []);

	return isBreakpoint;
};
