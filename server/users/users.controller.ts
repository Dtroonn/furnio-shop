import { IConfigSerivice } from './../config/config.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { IRoute } from './../common/route.interface';
import { IUsersController } from './users.controller.interface';
import { BaseController } from '../common/base.controller';
import { NextFunction, query, Request, Response, Router } from 'express';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { User as UserType } from '@prisma/client';
import { IUsersService } from './users.service.interface';
import { IJwtService } from 'jwt/jwt.service.interface';
import { excludeKeyFromObj } from '../common/utils/excludeKeyFromObj';
import { HTTPError } from '../errors/http-error.class';

@injectable()
export class UsersController extends BaseController implements IUsersController {
	private readonly routes: IRoute[] = [
		{
			func: this.vkLogin,
			method: 'get',
			path: '/vk-oauth/callback',
		},
		{
			func: this.vkOAuth,
			method: 'get',
			path: '/vk-oauth',
		},
		{
			func: this.refresh,
			method: 'get',
			path: '/refresh',
		},
		{
			func: this.get,
			method: 'get',
			path: '/:id',
		},
	];

	constructor(
		@inject(BIND_TYPES.IConfigService) private configService: IConfigSerivice,
		@inject(BIND_TYPES.IUsersService) private usersService: IUsersService,
		@inject(BIND_TYPES.IJwtService) private jwtService: IJwtService,
	) {
		super();
		this.bindRoutes(this.routes);
	}

	vkOAuth(req: Request, res: Response, next: NextFunction): void {
		const url = new URL('https://oauth.vk.com/authorize');
		url.searchParams.append('client_id', this.configService.get('VK_CLIENT_ID'));
		url.searchParams.append('display', 'page');
		url.searchParams.append('redirect_uri', this.configService.get('VK_REDIRECT_URI'));
		url.searchParams.append('scope', 'email');
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('v', this.configService.get('VK_API_VERSION'));

		res.redirect(url.href);
	}

	async vkLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { code } = req.query;

			const user = await this.usersService.vkLogin(code as string);
			await this.resUserAndTokens(res, user);
		} catch (err) {
			next(err);
		}
	}

	async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
		const { refreshToken } = req.cookies;
		try {
			if (!refreshToken) {
				return next(new HTTPError(401, '???????????? ?????? ?? ????????'));
			}

			const [jwtPayload, jwtTokenFromDb] = await Promise.all([
				this.jwtService.verify<UserType>(
					refreshToken,
					this.configService.get('AUTH_JWT_REFRESH_TOKEN'),
				),
				this.jwtService.findToken(refreshToken),
			]);
			if (!jwtPayload || !jwtTokenFromDb) {
				return next(new HTTPError(401, '?????????????? ????????????. ???????? ???? ?????????? ?? ????'));
			}

			const user = await this.usersService.findById(jwtPayload.id);
			if (!user) {
				return next(new HTTPError(400, '?????????? ???????????????????????? ???? ????????????'));
			}

			await this.resUserAndTokens(res, user);
		} catch (err) {
			next(err);
		} finally {
			this.jwtService.deleteToken(refreshToken);
		}
	}

	private async resUserAndTokens(res: Response, user: UserType): Promise<void> {
		const userWithoutPassword = excludeKeyFromObj(user, 'password');
		//???????????????? ?????????????? ???????????? ?? ???????????????? ?????????????????????? ????????
		const tokens = await this.jwtService.signAuthTokens(userWithoutPassword);
		await this.jwtService.saveToken(tokens.refreshToken);

		res.cookie('refreshToken', tokens.refreshToken, {
			httpOnly: true,
			maxAge: 1 * 24 * 60 * 60 * 1000,
		});

		this.ok(res, {
			user: userWithoutPassword,
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken,
		});
	}

	async get(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params;
			const user = await this.usersService.findById(+id);

			if (!user) {
				return next(new HTTPError(404, '???????????????????????? ???? ????????????'));
			}

			const userWithoutPassword = excludeKeyFromObj(user, 'password');

			this.ok(res, userWithoutPassword);
		} catch (err) {
			next(err);
		}
	}
}
