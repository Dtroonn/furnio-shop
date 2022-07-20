import { ITokenRepository } from './token.repository.interface';
import { IConfigSerivice } from './../config/config.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { inject, injectable } from 'inversify';
import { SignOptions, sign, verify } from 'jsonwebtoken';
import { IJwtService, ISignAuthTokensReturn } from './jwt.service.interface';
import 'reflect-metadata';
import { Token as TokenType } from '@prisma/client';

@injectable()
export class JwtService implements IJwtService {
	constructor(
		@inject(BIND_TYPES.IConfigService) private configService: IConfigSerivice,
		@inject(BIND_TYPES.ITokenRepository) private tokenRepository: ITokenRepository,
	) {}

	async sign(
		payload: string | Buffer | object,
		secret: string,
		options: SignOptions,
	): Promise<string> {
		return new Promise((resolve, reject) => {
			sign(payload, secret, options, (err, token) => {
				if (err) {
					reject(err);
				}

				resolve(token as string);
			});
		});
	}

	async verify<T>(token: string, secret: string): Promise<T | null> {
		return new Promise((resolve, reject) => {
			verify(token, secret, (err, payload) => {
				if (err) {
					resolve(null);
				}

				resolve(payload as T);
			});
		});
	}

	async signAuthAccessToken(payload: string | Buffer | object): Promise<string> {
		return this.sign(payload, this.configService.get('AUTH_JWT_ACCESS_TOKEN'), {
			expiresIn: this.configService.get('AUTH_JWT_ACCESS_EXPIRES'),
		});
	}

	async signAuthRefreshToken(payload: string | Buffer | object): Promise<string> {
		return this.sign(payload, this.configService.get('AUTH_JWT_REFRESH_TOKEN'), {
			expiresIn: this.configService.get('AUTH_JWT_REFRESH_EXPIRES'),
		});
	}

	async signAuthTokens(payload: string | Buffer | object): Promise<ISignAuthTokensReturn> {
		const [accessToken, refreshToken] = await Promise.all([
			this.signAuthAccessToken(payload),
			this.signAuthRefreshToken(payload),
		]);

		return {
			accessToken,
			refreshToken,
		};
	}

	async saveToken(token: string): Promise<TokenType> {
		return this.tokenRepository.create(token);
	}

	async findToken(token: string): Promise<TokenType | null> {
		return this.tokenRepository.find(token);
	}

	async deleteToken(token: string): Promise<TokenType> {
		return this.tokenRepository.delete(token);
	}
}
