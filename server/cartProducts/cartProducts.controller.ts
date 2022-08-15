import { ICartProductsService } from './cartProducts.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { ICartProductsController } from './cartProducts.controller.interface';
import { BaseController } from '../common/base.controller';
import { IRoute } from './../common/route.interface';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CartProductAddDto } from './dto/cartProductAdd.dto';

@injectable()
export class CartProductsController extends BaseController implements ICartProductsController {
	private readonly routes: IRoute[] = [
		{
			func: this.get,
			method: 'get',
			path: '',
		},
		{
			func: this.add,
			method: 'post',
			path: '',
		},
		{
			func: this.delete,
			method: 'delete',
			path: '/:id',
		},
	];

	constructor(
		@inject(BIND_TYPES.ICartProductsService) private cartProductsService: ICartProductsService,
	) {
		super();
		this.bindRoutes(this.routes);
	}

	async add(
		req: Request<{}, {}, CartProductAddDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { body, user, session } = req;

			const cartProduct = await this.cartProductsService.add(
				body,
				session.id,
				user ? user.id : null,
			);

			this.created(res, cartProduct);
		} catch (e) {
			next(e);
		}
	}

	async get(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { page, limit } = req.query;
			const { session, user } = req;

			const myPage = page || 1;
			const myLimit = limit || 100;

			const products = await this.cartProductsService.get(
				+myPage,
				+myLimit,
				session.id,
				user ? user.id : null,
			);

			this.ok(res, products);
		} catch (e) {
			next(e);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
		const { session, user } = req;
		const { id } = req.params;
		try {
			await this.cartProductsService.delete(+id, session.id, user ? user.id : null);
			res.status(200).end();
		} catch (e) {
			next(e);
		}
	}
}
