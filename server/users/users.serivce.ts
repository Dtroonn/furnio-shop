import { PrismaService } from './../database/prisma.service';
import { IConfigSerivice } from './../config/config.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { IUsersService } from './users.service.interface';
import axios from 'axios';
import { IVkOAuthRes, IVkUserRes } from './types/vk.responses.interfaces';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { User as UserType } from '@prisma/client';
import { IUser, User } from './user.entity';
import { IUsersRepository } from './users.repository.interface';

@injectable()
export class UsersService implements IUsersService {
	constructor(
		@inject(BIND_TYPES.IConfigService) private configService: IConfigSerivice,
		@inject(BIND_TYPES.IUsersRepository) private usersRepository: IUsersRepository,
	) {}

	async vkLogin(code: string): Promise<UserType> {
		const oauthRes = await axios.get<IVkOAuthRes>('https://oauth.vk.com/access_token', {
			params: {
				client_id: this.configService.get('VK_CLIENT_ID'),
				client_secret: this.configService.get('VK_CLIENT_SECRET'),
				redirect_uri: this.configService.get('VK_REDIRECT_URI'),
				code,
			},
		});

		const { access_token, user_id, email } = oauthRes.data;

		const userRes = await axios.post<IVkUserRes>(
			'https://api.vk.com/method/users.get',
			{},
			{
				params: {
					access_token: access_token,
					user_ids: user_id,
					v: this.configService.get('VK_API_VERSION'),
					fields: 'photo_200_orig',
				},
			},
		);

		const { first_name, last_name, photo_200_orig } = userRes.data.response[0];

		const userData: IUser = {
			firstName: first_name,
			lastName: last_name,
			photoUrl: photo_200_orig,
			email: email || null,
			vkId: user_id,
			password: null,
		};

		const candidate = await this.usersRepository.findByVkId(user_id);

		if (candidate) {
			if (
				candidate.email !== userData.email ||
				candidate.firstName !== userData.firstName ||
				candidate.lastName !== userData.lastName ||
				candidate.photoUrl !== userData.photoUrl
			) {
				return this.usersRepository.update(user_id, userData);
			}

			return candidate;
		}

		const user = new User(userData);

		return this.usersRepository.create(user);
	}

	async findById(id: number): Promise<UserType | null> {
		return this.usersRepository.findById(id);
	}
}
