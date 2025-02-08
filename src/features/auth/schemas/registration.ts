'use client';

import { z, ZodError } from 'zod';

export const formSchema = z.object({
	username: z.string().min(1, { message: 'Обязательное поле для заполнения' }).max(50, { message: 'Имя пользователя не должно превышать 50 символов' }),
	phone: z.string().min(11),
	email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	passwordRepeat: z.string().min(8, { message: 'Слишком короткий пароль' }),
}).refine((data) => data.password === data.passwordRepeat, {
	message: 'Пароли не совпадают',
	path: ['passwordRepeat'],
});

export type TypeRegistration = z.infer<typeof formSchema>;
export type TypeError = ZodError;
