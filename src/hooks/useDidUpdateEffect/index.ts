import React from 'react';

export const useDidUpdateEffect = (
	effectCallback: React.EffectCallback,
	deps?: React.DependencyList | undefined,
): void => {
	const isDidMountRef = React.useRef<boolean>(false);

	React.useEffect(() => {
		if (isDidMountRef.current) {
			return effectCallback();
		}
		isDidMountRef.current = true;
	}, deps);
};
