import clsx from 'clsx';
import React from 'react';
import { FullscreenSearchBox } from 'ui-kit/FullscreenSearchBox';
import { Icon } from 'ui-kit/Icon';
import { SearchField } from 'ui-kit/SearchField';
import { Md2Headercontext } from '..';

import classes from '../header.module.scss';

export const Search: React.FC = () => {
	const [openSearchBox, setOpenSearchBox] = React.useState<boolean>(false);

	const isMd2 = React.useContext(Md2Headercontext);

	const toggleOpenSearchBox = (): void => {
		setOpenSearchBox((prev) => !prev);
	};

	if (isMd2) {
		return (
			<>
				<div onClick={toggleOpenSearchBox}>
					<Icon
						icon="search"
						className={clsx(
							classes['actions-header__icon'],
							classes['actions-header__icon_search'],
						)}
					/>
				</div>
				<FullscreenSearchBox open={openSearchBox} onClose={toggleOpenSearchBox} />
			</>
		);
	}

	return <SearchField placeholder="Search for minimalist chair" />;
};
