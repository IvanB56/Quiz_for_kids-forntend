import {ProfileType} from "@/shared/constants/ProfilesType";

export interface Profile {
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
	type: ProfileType.SPONSOR
}

export interface ProfileSchema {
	data?: Profile[]
}