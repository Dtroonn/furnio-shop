import { ProductsRepository } from './products/products.repository';
import { ProductsController } from './products/products.controller';
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

import { IProductsController } from './products/products.controller.interface';
import { IProductsService } from './products/products.service.interface';
import { ProductsService } from './products/products.service';
import { IProductsRepository } from './products/products.repository.interface';
import { ICartProductsController } from './cartProducts/cartProducts.controller.interface';
import { CartProductsController } from './cartProducts/cartProducts.controller';
import { ICartProductsService } from './cartProducts/cartProducts.service.interface';
import { CartProductsService } from './cartProducts/cartProducts.service';
import { ICartProductsRepository } from './cartProducts/cartProducts.repository.interface';
import { CartProductsRepository } from './cartProducts/cartProducts.repository';

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

	bind<IProductsController>(BIND_TYPES.IProductsController).to(ProductsController);
	bind<IProductsService>(BIND_TYPES.IProductsService).to(ProductsService);
	bind<IProductsRepository>(BIND_TYPES.IProductsRepository).to(ProductsRepository);

	bind<ICartProductsController>(BIND_TYPES.ICartProductsController).to(CartProductsController);
	bind<ICartProductsService>(BIND_TYPES.ICartProductsService).to(CartProductsService);
	bind<ICartProductsRepository>(BIND_TYPES.ICartProductsRepository).to(CartProductsRepository);
});

const bootstrap = async (): Promise<IBootstrapReturn> => {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(BIND_TYPES.Application);
	app.init();

	return { app, appContainer };
};

export const boot = bootstrap();
