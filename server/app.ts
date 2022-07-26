import { IProductsController } from './products/products.controller.interface';
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
//@ts-ignore
import expressSession from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

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
		@inject(BIND_TYPES.IProductsController) private productsController: IProductsController,
	) {
		this.app = express();
		this.port = 7777;
	}

	private useRoutes(): void {
		this.app.use('/api/users', this.usersController.router);
		this.app.use('/api/products', this.productsController.router);
		// this.app.use('/lalka', (req, res) => {
		// 	console.log(req.body);
		// 	const piece = req.body.split('\n')[0];
		// 	const header = JSON.parse(piece);
		// 	console.log('HEADR', header);
		// 	const urlDsn = new URL(header.dsn);
		// 	console.log(urlDsn.host);
		// 	res.status(200);
		// 	res.end();
		// });
	}

	private useExeptionFilter(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}
	private useMiddlewares(): void {
		this.app.use(cookieParser());
		this.app.use(express.json());
		// this.app.use(express.text());

		this.app.use(
			expressSession({
				cookie: {
					maxAge: 7 * 24 * 60 * 60 * 1000, // ms
				},
				secret: 'a santa at nasa',
				resave: true,
				saveUninitialized: true,
				store: new PrismaSessionStore(this.prismaService.client, {
					checkPeriod: 2 * 60 * 1000, //ms
					dbRecordIdIsSessionId: true,
					dbRecordIdFunction: undefined,
				}),
			}),
		);

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
