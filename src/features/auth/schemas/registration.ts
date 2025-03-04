'use client';

import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле для заполнения' }).max(50, { message: 'Имя пользователя не должно превышать 50 символов' }),
	phone: z.string().min(11),
	email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	password_confirmation: z.string().min(8, { message: 'Слишком короткий пароль' }),
}).refine((data) => data.password === data.password_confirmation, {
	message: 'Пароли не совпадают',
	path: ['password_confirmation'],
});

export type TypeRegistration = z.infer<typeof formSchema>;
