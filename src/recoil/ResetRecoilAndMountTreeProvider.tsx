import { User } from '@prisma/client';
import React from 'react';
import { RecoilRoot } from 'recoil';

interface IResetRecoilAndMountTreeContext {
	resetRecoilAndMountTree: (user: null | Omit<User, 'password'>) => void;
	user: null | Omit<User, 'password'>;
}

export const ResetRecoilAndMountTreeContext = React.createContext<IResetRecoilAndMountTreeContext>({
	// eslint-disable-next-line
	resetRecoilAndMountTree: () => {},
	user: null,
});

//Костыль немного конечно. Но другого способа обнулить все состояние Recoil, я не нашел
export const ResetRecoilAndMountTreeProvider: React.FC = ({ children }) => {
	const [user, setUser] = React.useState<null | Omit<User, 'password'>>(null);

	const onReset = (user: null | Omit<User, 'password'>): void => {
		setUser(user);
	};

	return (
		<ResetRecoilAndMountTreeContext.Provider
			value={{
				resetRecoilAndMountTree: onReset,
				user: user,
			}}
		>
			<RecoilRoot key={user ? user.id : 'recoilRoot'}>{children}</RecoilRoot>
		</ResetRecoilAndMountTreeContext.Provider>
	);
};
