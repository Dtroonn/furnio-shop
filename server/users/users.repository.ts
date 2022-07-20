import { excludeKeyFromObj } from './../common/utils/excludeKeyFromObj';
import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { User as UserType } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { User } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import 'reflect-metadata';

@injectable()
export class UsersRepository implements IUsersRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(user: User): Promise<UserType> {
		return this.prismaService.client.user.create({
			data: user.data,
		});
	}

	async findById(id: number): Promise<UserType | null> {
		return this.prismaService.client.user.findFirst({
			where: {
				id,
			},
		});
	}

	async findByVkId(vkId: number): Promise<UserType | null> {
		return this.prismaService.client.user.findFirst({
			where: {
				vkId,
			},
		});
	}

	async update(id: number, user: Partial<UserType>): Promise<UserType> {
		return this.prismaService.client.user.update({
			where: {
				id: id,
			},
			data: user,
		});
	}
}
