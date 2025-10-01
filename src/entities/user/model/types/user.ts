import {ProfileType} from "@/shared/constants/ProfilesType";

export interface User {
	user_id: number;
	email?: string;
	phone: string;
	name?: string;
	surname?: string,
	patronymic?: string,
	birthdate?: string,
	region?: {
		slug: string;
		name: string;
	},
	type: ProfileType
}

export interface UserSchema {
	authData?: User;
}
