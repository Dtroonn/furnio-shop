import React from 'react';
import classes from './MainLoader.module.scss';

export const MainLoader: React.FC = () => {
	return (
		<div className={classes.preloader}>
			<div className={classes.loader}></div>
		</div>
	);
};
