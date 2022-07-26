import { NextFunction, Request, Response, Router } from 'express';

export interface IProductsController {
	router: Router;
	get: (req: Request, res: Response, next: NextFunction) => void;
}
