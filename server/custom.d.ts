import { User as UserType } from '@prisma/client';

// declare module 'express' {
// 	export interface Request {
// 		user?: Omit<UserType, 'id'>;
// 	}
// }

declare global {
	namespace Express {
		interface Request {
			user?: Omit<UserType, 'id'>;
		}
	}
}
