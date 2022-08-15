import clsx from 'clsx';
import React from 'react';
import classes from './CircularProgress.module.scss';
import { ICircularProgressProps } from './CircularProgress.props';

export const CircularProgress: React.FC<ICircularProgressProps> = ({
	color = 'white',
	size = 'medium',
}) => {
	return <div className={clsx(classes.circularProgress, classes[color], classes[size])}></div>;
};
