import { User as UserType } from '@prisma/client';
import { User } from './user.entity';

export interface IUsersRepository {
	create: (user: User) => Promise<UserType>;
	findById: (id: number) => Promise<UserType | null>;
	findByVkId: (vkId: number) => Promise<UserType | null>;
	update: (id: number, user: Partial<UserType>) => Promise<UserType>;
}
