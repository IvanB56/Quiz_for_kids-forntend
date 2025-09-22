import {ProfileType} from "@/shared/constants/ProfilesType";

export interface Student {
	user_id: number,
	email: string;
	phone: string;
	name: string;
	surname: string;
	patronymic: string;
	birthdate: string;
	type: ProfileType.STUDENT
}

export interface StudentSchema {
	data?: Student[];
	isLoading: boolean;
	error?: string;
	currentStudent?: Student;
}