import { BIND_TYPES } from './../bindTypes';
import { IExeptionFilter } from './exeption.filter.interface';
import { HTTPError } from './http-error.class';
import { Request, Response, NextFunction } from 'express';
import { ILogger } from 'logger/logger.service.interface';
import { inject, injectable } from 'inversify';

@injectable()
export class ExeptionFilter implements IExeptionFilter {
	constructor(@inject(BIND_TYPES.ILogger) private logger: ILogger) {}

	catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HTTPError) {
			res.status(err.statusCode).json({
				message: err.message,
			});
			this.logger.error(
				`Контекст ${err.context}. Cтатус код: ${err.statusCode}. Сообщение: ${err.message}`,
			);
			return;
		}

		res.status(500).json({
			message: err.message,
		});
		this.logger.error(`Ошибка сервера: ${err.message}`);
	}
}
