import React from 'react';

import clsx from 'clsx';
import classes from './PopupHeader.module.scss';
import { IPopupHeaderProps } from './PopupHeader.props';

const PopupHeader: React.FC<IPopupHeaderProps> = ({ children, className }) => (
	<div className={clsx(classes.header, className)}>{children}</div>
);

export default PopupHeader;
