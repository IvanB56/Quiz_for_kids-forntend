import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
	password: z.string().min(8, { message: 'Слишком короткий пароль' }),
});

export type TypeLogin = z.infer<typeof formSchema>;
