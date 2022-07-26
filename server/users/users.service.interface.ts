import { User } from '@prisma/client';

export interface IUsersService {
	vkLogin: (code: string) => Promise<User>;
	findById: (id: number) => Promise<User | null>;
}
