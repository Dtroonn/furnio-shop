import { Request, Response, NextFunction, Router } from 'express';

export interface IRoute {
	path: string;
	method: keyof Pick<Router, 'post' | 'get' | 'delete' | 'patch' | 'put'>;
	func: (req: Request, res: Response, next: NextFunction) => void;
}
