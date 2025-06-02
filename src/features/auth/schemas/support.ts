import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле' }),
	email: z.string().email({ message: 'Не валидный адрес электронной почты' }),
	theme: z.string(),
	text: z.string()
});

export type TypeSupport = z.infer<typeof formSchema>;
