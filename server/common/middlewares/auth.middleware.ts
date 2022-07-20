import { BIND_TYPES } from './../../bindTypes';
import { IMiddleware } from './middleware.interface';
import { NextFunction, Response, Request } from 'express';
import { inject, injectable } from 'inversify';
import { IJwtService } from 'jwt/jwt.service.interface';
import { User as UserType } from '@prisma/client';
import { IConfigSerivice } from 'config/config.service.interface';

@injectable()
export class AuthMiddleware implements IMiddleware {
	constructor(private jwtService: IJwtService, private configService: IConfigSerivice) {}
	async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
		const token = req.headers.authorization?.split(' ').pop();
		if (token) {
			const user = await this.jwtService.verify<Omit<UserType, 'id'>>(
				token,
				this.configService.get('AUTH_JWT_ACCESS_TOKEN'),
			);

			if (user) {
				req.user = user;
			}
		}

		next();
	}
}
