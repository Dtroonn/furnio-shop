import { User as UserType } from '@prisma/client';

export interface IUser extends Omit<UserType, 'id'> {
	id?: number;
}

export class User {
	private readonly _data: IUser;

	constructor(user: IUser) {
		this._data = user;
	}

	get data(): Readonly<IUser> {
		return this._data;
	}

	setPassword(value: string): void {
		this._data.password = value;
	}
}

// export class User {
// 	private readonly _password: string;

// 	constructor(
// 		private readonly _firstName: string,
// 		private readonly _lastName: string,
// 		private readonly _email: string,
// 	) {}

// 	get firstName(): string {
// 		return this._firstName;
// 	}

// 	get lastName(): string {
// 		return this._lastName;
// 	}

// 	get email(): string {
// 		return this._email;
// 	}
// }
