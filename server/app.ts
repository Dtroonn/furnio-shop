import { IConfigSerivice } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';
import { BIND_TYPES } from './bindTypes';
import { ILogger } from './logger/logger.service.interface';
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import { Server } from 'http';
import { injectable, inject } from 'inversify';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { IUsersController } from 'users/users.controller.interface';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { IJwtService } from 'jwt/jwt.service.interface';

@injectable()
export class App {
	app: Express;
	port: number;
	server: Server;

	constructor(
		@inject(BIND_TYPES.ILogger) private logger: ILogger,
		@inject(BIND_TYPES.IExeptionFilter) private exeptionFilter: IExeptionFilter,
		@inject(BIND_TYPES.IUsersController) private usersController: IUsersController,
		@inject(BIND_TYPES.PrismaService) private prismaService: PrismaService,
		@inject(BIND_TYPES.IConfigService) private configService: IConfigSerivice,
		@inject(BIND_TYPES.IJwtService) private jwtService: IJwtService,
	) {
		this.app = express();
		this.port = 7777;
	}

	private useRoutes(): void {
		this.app.use('/users', this.usersController.router);
	}

	private useExeptionFilter(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}
	private useMiddlewares(): void {
		this.app.use(cookieParser());

		const authMiddleware = new AuthMiddleware(this.jwtService, this.configService);
		this.app.use(authMiddleware.execute.bind(authMiddleware));
	}

	public async init(): Promise<void> {
		await this.prismaService.connect();
		this.useMiddlewares();
		this.useRoutes();
		this.useExeptionFilter();
		this.server = this.app.listen(this.port);
		this.logger.log(`Сервер запущен на ${this.port}`);
	}
}
