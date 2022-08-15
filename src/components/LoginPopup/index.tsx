import React from 'react';
import Popup from 'ui-kit/popups/Popup';
import PopupHeader from 'ui-kit/popups/PopupHeader';
import classes from './LoginPopup.module.scss';
import { Text } from 'ui-kit/Text';
import { ILoginPopupProps } from './LoginPopup.props';
import PopupBody from 'ui-kit/popups/PopupBody';
import { Button } from 'ui-kit/Button';
import { useAuthenticateByOAuthTask } from 'recoil/auth/tasks/useAuthenticateByOAuth.task';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { authUserState } from 'recoil/auth/states/authUser.state';

export const LoginPopup: React.FC<ILoginPopupProps> = ({ open }) => {
	const authenticateByOAuth = useAuthenticateByOAuthTask();
	const user = useRecoilValue(authUserState);
	const navigate = useNavigate();
	const location = useLocation();

	const handleClose = (): void => {
		if ((location.state as null | { fromApp: true })?.fromApp) {
			navigate(-1);
			return;
		}

		navigate(location.pathname, { replace: true });
	};

	const handleClickOAuthVk = (): void => {
		authenticateByOAuth('http://localhost:7777/api/users/vk-oauth');
	};

	return (
		<Popup open={open} onClose={handleClose} contentClassName={classes.popup__content}>
			<PopupHeader className={classes.popup__header}>
				<Text size="h3">{user ? `${user.firstName}, welcome to Funiro!` : 'Your profile'}</Text>
			</PopupHeader>
			<PopupBody>
				{!user && (
					<Button onClick={handleClickOAuthVk} fullWidth className={classes.popup__btn}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
							className={classes['popup__social-icon']}
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M14.763 3H9.237C4.194 3 3 4.194 3 9.237v5.526C3 19.806 4.194 21 9.237 21h5.526C19.806 21 21 19.806 21 14.763V9.237C21 4.194 19.793 3 14.763 3zm2.77 12.843h-1.31c-.495 0-.647-.394-1.536-1.296-.775-.75-1.118-.851-1.309-.851-.267 0-.343.076-.343.444v1.182c0 .317-.101.508-.94.508-1.384 0-2.921-.838-4.001-2.4-1.626-2.287-2.07-4.002-2.07-4.358 0-.19.076-.368.444-.368h1.308c.33 0 .458.152.585.508.647 1.867 1.727 3.506 2.172 3.506.165 0 .241-.076.241-.496v-1.93c-.05-.89-.52-.966-.52-1.284 0-.152.126-.304.33-.304h2.058c.279 0 .38.152.38.482v2.604c0 .28.128.382.204.382.165 0 .305-.102.61-.407.94-1.054 1.613-2.68 1.613-2.68.089-.19.241-.369.571-.369h1.309c.394 0 .483.204.394.483-.165.762-1.766 3.023-1.766 3.023-.14.229-.19.33 0 .585.14.19.597.584.902.94.559.635.99 1.168 1.105 1.537.127.368-.063.559-.432.559z"
							></path>
						</svg>
						<Text size="body2" color="white">
							VK
						</Text>
					</Button>
				)}
				{user && (
					<Button onClick={handleClose} fullWidth>
						Сontinue
					</Button>
				)}
			</PopupBody>
		</Popup>
	);
};
