import React from 'react';

export interface IUseIntersectionOptions {
	targetRef: React.MutableRefObject<HTMLElement | null> | null;
	onIntersected?: () => void;
	unobserveAfterInterseceted?: boolean;
}
