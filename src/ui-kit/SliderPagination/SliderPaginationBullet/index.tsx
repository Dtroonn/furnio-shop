import clsx from 'clsx';
import React from 'react';

import classes from './SliderPaginationBullet.module.scss';

export interface ISliderPaginationBulletProps {
	className?: string;
}

export const SliderPaginationBullet: React.FC<ISliderPaginationBulletProps> = ({ className }) => {
	return (
		<div className={clsx(classes.bullet, className)}>
			<div className={classes['bullet__dot']}></div>
		</div>
	);
};
