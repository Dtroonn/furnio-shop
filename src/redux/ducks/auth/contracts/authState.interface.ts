import { User } from '@prisma/client';
import { LoadingStatus } from 'redux/types/loadingStatus.type';

export interface IAuthState {
	user: Omit<User, 'password'> | null;
	checkAuthLoadingStatus: LoadingStatus;
}
