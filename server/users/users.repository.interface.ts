import { User } from '@prisma/client';
import { UserEntity } from './user.entity';

export interface IUsersRepository {
	create: (user: UserEntity) => Promise<User>;
	findById: (id: number) => Promise<User | null>;
	findByVkId: (vkId: number) => Promise<User | null>;
	update: (id: number, user: Partial<User>) => Promise<User>;
}
