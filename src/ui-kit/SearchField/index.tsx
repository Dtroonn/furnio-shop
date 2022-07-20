import clsx from 'clsx';
import React from 'react';
import { Icon } from 'ui-kit/Icon';
import { TextField } from 'ui-kit/TextField';

import classes from './SearchField.module.scss';
import { ISearchFieldProps } from './SearchField.props.interface';

export const SearchField: React.FC<ISearchFieldProps> = ({ className, placeholder = '' }) => {
	return (
		<form className={clsx(classes.search, className)}>
			<button type="submit" className={classes['search__icon-button']}>
				<Icon icon="search" />
			</button>
			<div className={classes['search__input-wrapper']}>
				<TextField placeholder={placeholder} fullWidth />
			</div>
		</form>
	);
};
