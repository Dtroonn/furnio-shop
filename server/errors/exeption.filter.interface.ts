import { ILogger } from './../logger/logger.service.interface';
import { HTTPError } from './http-error.class';
import { Request, Response, NextFunction } from 'express';

export interface IExeptionFilter {
	catch: (err: Error | HTTPError, req: Request, res: Response, next: NextFunction) => void;
}
