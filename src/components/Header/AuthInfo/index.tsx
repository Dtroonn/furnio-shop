import { User } from '@prisma/client';
import React from 'react';
import { Avatar } from 'ui-kit/Avatar';
import { IAuthInfoProps } from './AuthInfo.props';
import avaBaskov from 'assets/baskov.jpg';
import { Text } from 'ui-kit/Text';
import { createSearchParams, useNavigate } from 'react-router-dom';
import {
	GET_POPUPS_PARAMS,
	GET_POPUPS_ENUMS,
} from 'components/GetParameterPopups/parameterPopups.config';

import classes from './AuthInfo.module.scss';
import clsx from 'clsx';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { ResetRecoilAndMountTreeContext } from 'recoil/ResetRecoilAndMountTreeProvider';
import { useSetRecoilState } from 'recoil';
import { authUserState } from 'recoil/auth/states/authUser.state';

export const AuthInfo: React.FC<IAuthInfoProps> = ({ user }) => {
	const setAuthUserState = useSetRecoilState(authUserState);
	const [openPopupMenu, setOpenPopupMenu] = React.useState<boolean>(false);
	const popupMenuRef = React.useRef<HTMLDivElement>(null);
	const { resetRecoilAndMountTree } = React.useContext(ResetRecoilAndMountTreeContext);

	useOutsideClick(popupMenuRef, () => setOpenPopupMenu(false));

	const toggleOpenPopupMenu = (): void => {
		setOpenPopupMenu((prev) => !prev);
	};

	const navigate = useNavigate();
	const onOpenLoginPopup = (): void => {
		navigate(
			{
				search: createSearchParams({
					[GET_POPUPS_PARAMS.popup]: GET_POPUPS_ENUMS.popup.signIn,
				}).toString(),
			},
			{ state: { fromApp: true } },
		);
	};

	const onLogout = (): void => {
		localStorage.removeItem('accessToken');
		setAuthUserState(null);
		resetRecoilAndMountTree(null);
	};

	return (
		<>
			{!user && (
				<div onClick={onOpenLoginPopup} className={classes.loginButton}>
					<Text size="body2" className={classes.loginButton__text}>
						Log in
					</Text>
				</div>
			)}
			{user && (
				<div ref={popupMenuRef} className={classes['auth-info']}>
					<div onClick={toggleOpenPopupMenu} className={classes['auth-info__avatar-wrapper']}>
						<Avatar url={user.photoUrl || avaBaskov} />
					</div>
					<ul
						className={clsx(classes['auth-info-menu'], {
							[classes.active]: openPopupMenu,
						})}
					>
						<li onClick={onLogout}>
							<Text size="body2">Log out</Text>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
