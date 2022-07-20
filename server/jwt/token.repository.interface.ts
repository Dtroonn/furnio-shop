import { Token as TokenType } from '@prisma/client';

export interface ITokenRepository {
	create: (token: string) => Promise<TokenType>;
	delete: (token: string) => Promise<TokenType>;
	find: (token: string) => Promise<TokenType | null>;
}
