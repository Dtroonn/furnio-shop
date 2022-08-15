import { User } from '@prisma/client';

export interface IAuthInfoProps {
	user: Omit<User, 'password'> | null;
}
