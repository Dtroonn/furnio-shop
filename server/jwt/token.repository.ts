import { PrismaService } from './../database/prisma.service';
import { BIND_TYPES } from './../bindTypes';
import { Token as TokenType } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ITokenRepository } from './token.repository.interface';
import 'reflect-metadata';

@injectable()
export class TokenRepository implements ITokenRepository {
	constructor(@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService) {}

	create(token: string): Promise<TokenType> {
		return this.prismaService.client.token.create({
			data: {
				token: token,
			},
		});
	}

	delete(token: string): Promise<TokenType> {
		return this.prismaService.client.token.delete({
			where: {
				token,
			},
		});
	}

	find(token: string): Promise<TokenType | null> {
		return this.prismaService.client.token.findFirst({
			where: {
				token,
			},
		});
	}
}
