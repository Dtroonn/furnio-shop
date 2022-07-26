// import { User } from '@prisma/client';
// import { refreshAuthRequest } from 'api/users';
// import { IAuthRes } from 'api/users/contracts/AuthRes.interface';
// import {
// 	atom,
// 	DefaultValue,
// 	selector,
// 	useRecoilState,
// 	useRecoilSnapshot,
// 	selectorFamily,
// 	RecoilState,
// } from 'recoil';
// import { authUserState } from '../states/authUser.state';

// export const authUserQuery = selector({
// 	key: 'checkAuthQuery',
// 	get: async () => {
// 		try {
// 			const data = await refreshAuthRequest();
// 			localStorage.setItem('accessToken', data.accessToken);
// 			return data.user;
// 		} catch (e) {
// 			return null;
// 		}
// 	},
// 	set: ({ set }, newValue) => {
// 		console.log('hello from SELECTOR', newValue);
// 		set(authUserQuery, newValue);
// 	},
// });

export const lalka = '';
