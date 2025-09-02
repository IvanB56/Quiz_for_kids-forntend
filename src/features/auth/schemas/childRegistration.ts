'use client';

import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле для заполнения' }).max(50, { message: 'Имя пользователя не должно превышать 50 символов' }),
	phone: z.string().min(14, {message: 'Номер телефона не может быть меньше 11 символов'}),
	email: z.string().email({ message: 'Не верный формат электронной почты' }),
	region: z.string().min(1, { message: 'Выберете регион из списка' }),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	password_confirmation: z.string().min(8, { message: 'Слишком короткий пароль' }),
}).refine((data) => data.password === data.password_confirmation, {
	message: 'Пароли не совпадают',
	path: ['password_confirmation'],
});


export type TypeChildRegistration = z.infer<typeof formSchema>;
