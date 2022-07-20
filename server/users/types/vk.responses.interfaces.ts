export interface IVkOAuthRes {
	access_token: string;
	expires_in: number;
	user_id: number;
	email?: string;
}

export interface IVkUserRes {
	response: {
		first_name: string;
		last_name: string;
		photo_200_orig: string;
	}[];
}
