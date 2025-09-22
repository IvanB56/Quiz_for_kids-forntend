import {z} from 'zod';

export const formSchema = z.object({
	phone: z.string().min(14, {message: 'Номер телефона не может быть меньше 11 символов'}),
	password: z.string().min(3, { message: 'Слишком короткий пароль' }),
});

export type TypeLogin = z.infer<typeof formSchema>;
export interface LoginSchema extends TypeLogin {
	isLoading: boolean;
	error?: Array<string>;
}