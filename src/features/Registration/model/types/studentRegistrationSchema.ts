import {z} from 'zod';

export const formSchema = z.object({
	login: z.string().min(1, {message: 'Обязательное поле'}),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	password_confirmation: z.string().min(8, { message: 'Слишком короткий пароль' }),
	token: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
	message: 'Пароли не совпадают',
	path: ['password_confirmation'],
});

export type TypeStudentRegistration = z.infer<typeof formSchema>;

export interface StudentRegistrationSchema extends TypeStudentRegistration{
	isLoading: boolean,
	error?: Array<string>
}