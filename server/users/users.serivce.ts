import { PrismaService } from './../database/prisma.service';
import { IConfigSerivice } from './../config/config.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { IUsersService } from './users.service.interface';
import axios from 'axios';
import { IVkOAuthRes, IVkUserRes } from './types/vk.responses.interfaces';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { User } from '@prisma/client';
import { IUserEntity, UserEntity } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import { ICartProductsService } from 'cartProducts/cartProducts.service.interface';

@injectable()
export class UsersService implements IUsersService {
	constructor(
		@inject(BIND_TYPES.IConfigService) private configService: IConfigSerivice,
		@inject(BIND_TYPES.IUsersRepository) private usersRepository: IUsersRepository,
		@inject(BIND_TYPES.ICartProductsService) private cartProductsService: ICartProductsService,
	) {}

	async vkLogin(code: string, sessionId: string): Promise<User> {
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

		const userData: IUserEntity = {
			firstName: first_name,
			lastName: last_name,
			photoUrl: photo_200_orig,
			email: email || null,
			vkId: user_id,
			password: null,
		};

		const candidate = await this.usersRepository.findByVkId(user_id);

		if (candidate) {
			const userCartProductCount = await this.cartProductsService.getСount(null, candidate.id);
			if (
				candidate.email !== userData.email ||
				candidate.firstName !== userData.firstName ||
				candidate.lastName !== userData.lastName ||
				candidate.photoUrl !== userData.photoUrl
			) {
				const [user] = await Promise.all([
					this.usersRepository.update(user_id, userData),
					userCartProductCount
						? null
						: this.cartProductsService.updateCartProductsUserIdBySessionId(sessionId, candidate.id),
				]);

				return user;
			}

			if (!userCartProductCount) {
				await this.cartProductsService.updateCartProductsUserIdBySessionId(sessionId, candidate.id);
			}

			return candidate;
		}

		const user = new UserEntity(userData);

		const userFromBd = await this.usersRepository.create(user);
		await this.cartProductsService.updateCartProductsUserIdBySessionId(sessionId, userFromBd.id);

		return userFromBd;
	}

	async findById(id: number): Promise<User | null> {
		return this.usersRepository.findById(id);
	}
}
