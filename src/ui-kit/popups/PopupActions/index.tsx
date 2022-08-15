import React from 'react';

import clsx from 'clsx';
import classes from './PopupActions.module.scss';
import { IPopupActionsProps } from './PopupActions.props';

const PopupActions: React.FC<IPopupActionsProps> = ({
	children,
	className,
	contentPosition = 'center',
}) => (
	<div className={clsx(classes.container, classes[`position-${contentPosition}`], className)}>
		{children}
	</div>
);

export default PopupActions;
