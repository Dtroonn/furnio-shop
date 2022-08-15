import { Session, User } from '@prisma/client';

declare global {
	namespace Express {
		interface Request {
			user?: Omit<User, 'password'>;
			session: Session;
		}
	}
}
