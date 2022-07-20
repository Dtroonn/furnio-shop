import { IRoute } from './route.interface';
import { Response, Router } from 'express';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor() {
		this._router = Router();
	}

	public send<T>(res: Response, code: number, data: T): void {
		res.status(code).json(data);
	}

	public ok<T>(res: Response, data: T): void {
		this.send(res, 200, data);
	}

	public created<T>(res: Response, data: T): void {
		this.send(res, 201, data);
	}

	get router(): Router {
		return this._router;
	}

	protected bindRoutes(routes: IRoute[]): void {
		routes.forEach((route) => {
			const handler = route.func.bind(this);

			this._router[route.method](route.path, handler);
		});
	}
}
