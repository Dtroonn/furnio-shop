import { excludeKeyFromObj } from './../common/utils/excludeKeyFromObj';
import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { User } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { UserEntity } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import 'reflect-metadata';

@injectable()
export class UsersRepository implements IUsersRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(user: UserEntity): Promise<User> {
		return this.prismaService.client.user.create({
			data: user.data,
		});
	}

	async findById(id: number): Promise<User | null> {
		return this.prismaService.client.user.findFirst({
			where: {
				id,
			},
		});
	}

	async findByVkId(vkId: number): Promise<User | null> {
		return this.prismaService.client.user.findFirst({
			where: {
				vkId,
			},
		});
	}

	async update(id: number, user: Partial<User>): Promise<User> {
		return this.prismaService.client.user.update({
			where: {
				id: id,
			},
			data: user,
		});
	}
}
