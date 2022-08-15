import { IProductsService } from './products.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { IProductsController } from './products.controller.interface';
import { BaseController } from '../common/base.controller';
import { IRoute } from './../common/route.interface';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductCreateDto } from './dto/productCreate.dto';

@injectable()
export class ProductsController extends BaseController implements IProductsController {
	private readonly routes: IRoute[] = [
		{
			func: this.get,
			method: 'get',
			path: '',
		},
		{
			func: this.create,
			method: 'post',
			path: '',
		},
	];

	constructor(@inject(BIND_TYPES.IProductsService) private productsService: IProductsService) {
		super();
		this.bindRoutes(this.routes);
	}

	async create(
		req: Request<{}, {}, ProductCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { body } = req;
			const product = await this.productsService.create(body);

			this.created(res, product);
		} catch (e) {
			next(e);
		}
	}

	async get(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { page, limit } = req.query;
			const { user, session } = req;

			const myPage = page || 1;
			const myLimit = limit || 10;

			let productsPromise;

			if (user) {
				productsPromise = this.productsService.get(+myPage, +myLimit, null, user.id);
			} else {
				productsPromise = this.productsService.get(+myPage, +myLimit, session.id, null);
			}

			const [products, count] = await Promise.all([
				productsPromise,
				this.productsService.getCount(),
			]);

			this.ok(res, {
				data: products,
				count,
			});
		} catch (e) {
			next(e);
		}
	}
}
