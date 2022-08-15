import { NextFunction, Request, Response, Router } from 'express';

export interface IUsersController {
	router: Router;
	vkOAuth: (req: Request, res: Response, next: NextFunction) => void;
	vkLogin: (req: Request, res: Response, next: NextFunction) => void;
	refresh: (req: Request, res: Response, next: NextFunction) => Promise<void>;
	get: (req: Request, res: Response, next: NextFunction) => Promise<void>;
	getActivitiesInfo: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
