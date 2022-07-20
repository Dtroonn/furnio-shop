import clsx from 'clsx';
import React from 'react';

import classes from './AdaptiveImage.module.scss';

interface IAdaptiveImageProps {
	className?: string;
	url: string;
	children?: React.ReactNode;
}

export const AdaptiveImage = React.forwardRef<HTMLDivElement, IAdaptiveImageProps>(
	({ url, className, children }, ref) => {
		return (
			<div
				ref={ref}
				className={clsx(classes.image, className)}
				style={{ backgroundImage: `url(${url})` }}
			>
				{children}
			</div>
		);
	},
);
