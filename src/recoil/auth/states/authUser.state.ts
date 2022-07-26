import { User } from '@prisma/client';
import { refreshAuthRequest } from 'api/users';
import { atom } from 'recoil';

export const authUserState = atom<null | Omit<User, 'password'>>({
	key: 'authUserState',
	default: (async (): Promise<Omit<User, 'password'> | null> => {
		try {
			const token = localStorage.getItem('accessToken');
			if (!token) {
				return null;
			}
			const data = await refreshAuthRequest();
			localStorage.setItem('accessToken', data.accessToken);
			return data.user;
		} catch (e) {
			return null;
		}
	})(),
});
