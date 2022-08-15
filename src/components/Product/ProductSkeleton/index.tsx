import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './ProductSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// export const ProductSkeleton: React.FC = () => {
// 	return (
// 		<ContentLoader width="100%" speed={2} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
// 			<rect x="0" y="0" rx="0" ry="0" width="100%" height="" />
// 			<rect x="10" y="129" rx="0" ry="0" width="91" height="8" />
// 			<rect x="10" y="152" rx="0" ry="0" width="120" height="9" />
// 		</ContentLoader>
// 	);
// };

export const ProductSkeleton: React.FC = () => {
	return (
		<div className={classes.skeleton}>
			<Skeleton className={classes.skeleton__image} />
			<Skeleton className={classes.skeleton__title} />
			<Skeleton className={classes.skeleton__subtitle} />
			<Skeleton className={classes.skeleton__price} />
		</div>
	);
};
