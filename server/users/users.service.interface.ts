import { User as UserType } from '@prisma/client';

export interface IUsersService {
	vkLogin: (code: string) => Promise<UserType>;
	findById: (id: number) => Promise<UserType | null>;
}
