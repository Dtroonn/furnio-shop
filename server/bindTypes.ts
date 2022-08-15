export const BIND_TYPES = {
	Application: Symbol.for('Application'),
	ILogger: Symbol.for('ILogger'),
	IExeptionFilter: Symbol.for('IExeptionFilter'),
	IUsersController: Symbol.for('IUsersController'),
	IConfigService: Symbol.for('IConfigSerivce'),
	IUsersService: Symbol.for('IUsersService'),
	IUsersRepository: Symbol.for('IUsersRepository'),
	PrismaService: Symbol.for('PrismaService'),
	IJwtService: Symbol.for('IJwtService'),
	ITokenRepository: Symbol.for('ITokenRepository'),
	IProductsRepository: Symbol.for('IProductsRepository'),
	IProductsService: Symbol.for('IProductsService'),
	IProductsController: Symbol.for('IProductsController'),

	ICartProductsController: Symbol.for('ICartProductsController'),
	ICartProductsService: Symbol.for('ICartProductsService'),
	ICartProductsRepository: Symbol.for('ICartProductsRepository'),
};
