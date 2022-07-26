import { Dispatch } from '@reduxjs/toolkit';
import { setUser } from '../authSlice';

//Не использую createAsyncThunk т.к мне не нужны экшены, которые она генерит
export const authenticateByOAuth =
	(url: string) =>
	async (dispatch: Dispatch): Promise<void> => {
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
				dispatch(setUser(e.data.data.user));
				window.removeEventListener('message', handleWindowMessage);
			}
		};

		window.addEventListener('message', handleWindowMessage);
	};
