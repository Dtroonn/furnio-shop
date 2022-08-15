import React from 'react';

export const usePrevious = <T>(value: T): T => {
	const valueRef = React.useRef(value);

	React.useEffect(() => {
		valueRef.current = value;
	});

	return valueRef.current;
};
