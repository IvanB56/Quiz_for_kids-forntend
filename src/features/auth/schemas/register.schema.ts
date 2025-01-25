import {string, z} from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegisterSchema = z
	.object({
		login: string().min(3, {message: 'Введите имя'}),
		email: string().email({message: 'Введите корректный email'}),
		phone: string().min(11, {message: 'Не верный формат телефона'}),
		password: string().min(6, {message: 'Пароль слишком короткий, минимум 6 символов'}),
		passwordRepeat: string().min(6, {message: 'Пароль слишком короткий, минимум 6 символов'}),
	})
	.refine((data) => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat'],
	});

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>;
