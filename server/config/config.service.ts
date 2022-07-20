import { ILogger } from 'logger/logger.service.interface';
import { BIND_TYPES } from './../bindTypes';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import path from 'path';
import 'reflect-metadata';

@injectable()
export class ConfigService {
	private config: DotenvParseOutput;

	constructor(@inject(BIND_TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config({ path: path.resolve(__dirname, '..', '.env') });

		if (result.error) {
			this.logger.error('[ConfigService] Не удалось прочитать файл .env или он отсуствует');
		} else {
			this.config = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string): string {
		return this.config[key];
	}
}
