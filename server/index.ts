import { TokenRepository } from './jwt/token.repository';
import { IJwtService } from './jwt/jwt.service.interface';
import { IUsersRepository } from './users/users.repository.interface';
import { PrismaService } from './database/prisma.service';
import { UsersService } from './users/users.serivce';
import { ConfigService } from './config/config.service';
import { UsersController } from './users/users.controller';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { Container, ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';

import { ILogger } from './logger/logger.service.interface';
import { BIND_TYPES } from './bindTypes';
import { App } from './app';
import { LoggerService } from './logger/logger.service';
import { ExeptionFilter } from './errors/exeption.filter';
import { IUsersController } from './users/users.controller.interface';
import { IConfigSerivice } from './config/config.service.interface';
import { IUsersService } from './users/users.service.interface';
import { UsersRepository } from './users/users.repository';
import { JwtService } from './jwt/jwt.service';
import { ITokenRepository } from 'jwt/token.repository.interface';

export interface IBootstrapReturn {
	app: App;
	appContainer: Container;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(BIND_TYPES.Application).to(App);
	bind<ILogger>(BIND_TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExeptionFilter>(BIND_TYPES.IExeptionFilter).to(ExeptionFilter).inSingletonScope();
	bind<IUsersController>(BIND_TYPES.IUsersController).to(UsersController);
	bind<IConfigSerivice>(BIND_TYPES.IConfigService).to(ConfigService).inSingletonScope();
	bind<IUsersService>(BIND_TYPES.IUsersService).to(UsersService).inSingletonScope();
	bind<IUsersRepository>(BIND_TYPES.IUsersRepository).to(UsersRepository);
	bind<PrismaService>(BIND_TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<IJwtService>(BIND_TYPES.IJwtService).to(JwtService).inSingletonScope();
	bind<ITokenRepository>(BIND_TYPES.ITokenRepository).to(TokenRepository);
});

const bootstrap = async (): Promise<IBootstrapReturn> => {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(BIND_TYPES.Application);
	app.init();

	return { app, appContainer };
};

export const boot = bootstrap();
