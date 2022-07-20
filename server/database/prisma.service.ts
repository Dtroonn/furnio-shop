import { BIND_TYPES } from './../bindTypes';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from 'logger/logger.service.interface';
import 'reflect-metadata';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(BIND_TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[PrismaService] успешное подключение к бд');
		} catch (err) {
			if (err instanceof Error) {
				this.logger.error(`[PrismaService] ошибка подключения к бд ${err.message}`);
			}
		}
	}
}
