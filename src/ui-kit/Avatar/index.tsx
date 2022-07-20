import React from 'react';

import classes from './Avatar.module.scss';
import { IAvatarProps } from './Avatar.props.interface';

export const Avatar: React.FC<IAvatarProps> = ({ url, alt = '' }) => {
	return <img className={classes.avatar} src={url} alt={alt} />;
};
