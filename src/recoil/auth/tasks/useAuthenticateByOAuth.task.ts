import { authUserState } from 'recoil/auth/states/authUser.state';
import { useSetRecoilState } from 'recoil';

export const useAuthenticateByOAuthTask = (): ((url: string) => void) => {
	const setUser = useSetRecoilState(authUserState);

	const authenticateByOAuth = (url: string): void => {
		const popupWinWidth = 500;
		const popupWinHeight = 500;

		const left = (screen.width - popupWinWidth) / 2;
		const top = (screen.height - popupWinHeight) / 4;
		window.open(
			url,
			'oauth-furnio',
			`width=${popupWinWidth},height=${popupWinHeight},top=${top},left=${left}`,
		);

		const handleWindowMessage = (e: MessageEvent): void => {
			if (typeof e.data === 'object' && e.data.from === 'furnio') {
				localStorage.setItem('accessToken', e.data.data.accessToken);
				setUser(e.data.data.user);
				window.removeEventListener('message', handleWindowMessage);
			}
		};

		window.addEventListener('message', handleWindowMessage);
	};

	return authenticateByOAuth;
};
