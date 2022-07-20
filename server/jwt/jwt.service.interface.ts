import { Token as TokenType } from '@prisma/client';
import { SignOptions } from 'jsonwebtoken';

export interface ISignAuthTokensReturn {
	accessToken: string;
	refreshToken: string;
}

export interface IJwtService {
	sign: (
		payload: string | Buffer | object,
		secret: string,
		options: SignOptions,
	) => Promise<string>;

	verify: <T>(token: string, secret: string) => Promise<T | null>;

	signAuthAccessToken: (payload: string | Buffer | object) => Promise<string>;

	signAuthRefreshToken: (payload: string | Buffer | object) => Promise<string>;

	signAuthTokens: (payload: string | Buffer | object) => Promise<ISignAuthTokensReturn>;

	saveToken: (token: string) => Promise<TokenType>;

	deleteToken: (token: string) => Promise<TokenType>;

	findToken: (token: string) => Promise<TokenType | null>;
}
