import {z} from 'zod';

export const formSchema = z.object({
	email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
	new_email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
});

export type TypeEmail = z.infer<typeof formSchema>;
