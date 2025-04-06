'use client';

import {z} from 'zod';

export const formSchema = z.object({
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	new_password: z.string().min(8, { message: 'Слишком короткий пароль' }),
	password_confirmation: z.string().min(8, { message: 'Слишком короткий пароль' }),
}).refine((data) => data.new_password === data.password_confirmation, {
	message: 'Пароли не совпадают',
	path: ['password_confirmation'],
});

export type TypePassword = z.infer<typeof formSchema>;
