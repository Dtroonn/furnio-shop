import React from 'react';

import clsx from 'clsx';
import classes from './PopupBody.module.scss';
import { IPopupBodyProps } from './PopupBody.props';

const PopupBody: React.FC<IPopupBodyProps> = ({ children, className }) => (
	<div className={clsx(classes.body, className)}>{children}</div>
);

export default PopupBody;
