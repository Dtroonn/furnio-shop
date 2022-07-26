import { User } from '@prisma/client';

export interface IAuthRes {
	user: Omit<User, 'password'>;
	accessToken: string;
	refreshToken: string;
}
