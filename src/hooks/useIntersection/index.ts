import React from 'react';
import { IUseIntersectionOptions } from './useIntersectionOptions.interface';

export const useIntersection = (
	{ targetRef, onIntersected, unobserveAfterInterseceted = true }: IUseIntersectionOptions,
	options?: IntersectionObserverInit,
): void => {
	React.useEffect(
		() => {
			if (!targetRef || !targetRef.current) {
				return;
			}

			const observerInstance = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (onIntersected) {
							onIntersected();
						}

						if (unobserveAfterInterseceted) {
							observer.unobserve(entry.target);
						}
					}
				});
			}, options);

			observerInstance.observe(targetRef.current);

			return () => {
				observerInstance.disconnect();
			};
		},

		//onIntersected сюда специально не был внесен т.к логично , что
		//IntersectionObserver должен зависеть в основном от target
		[targetRef, unobserveAfterInterseceted],
	);
};
