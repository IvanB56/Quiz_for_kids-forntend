import {string, z} from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginSchema = z.object({
	phone: string().min(11, {message: 'Не верный формат телефона'}),
	password: string().min(6, {message: 'Пароль слишком короткий, минимум 6 символов'}),
});

export type TypeLoginSchema = z.infer<typeof LoginSchema>;
