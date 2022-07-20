import clsx from 'clsx';
import React from 'react';

import classes from './SliderPagination.module.scss';

interface ISliderPaginationProps {
	className?: string;
}

export const SliderPagination: React.FC<ISliderPaginationProps> = ({ className, children }) => {
	return <div className={clsx(classes.pagination, className)}>{children}</div>;
};
