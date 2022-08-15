import { NextFunction, Request, Response, Router } from 'express';

export interface ICartProductsController {
	router: Router;
	add: (req: Request, res: Response, next: NextFunction) => void;
	get: (req: Request, res: Response, next: NextFunction) => void;
	delete: (req: Request, res: Response, next: NextFunction) => void;
}
