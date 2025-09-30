'use client';

import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, {message: 'Обязательное поле'}),
	phone: z.string().min(14, {message: 'Не верный формат телефона'}),
	email: z.string().email({ message: 'Не верный формат электронной почты' }).optional(),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	password_confirmation: z.string().min(8, { message: 'Слишком короткий пароль' }),
	phone_verify_code: z.string()
}).refine((data) => data.password === data.password_confirmation, {
	message: 'Пароли не совпадают',
	path: ['password_confirmation'],
});

export type TypeRegistration = z.infer<typeof formSchema>;

export interface RegistrationSchema extends TypeRegistration {
	isLoading: boolean;
	error?: Array<string>;
}
