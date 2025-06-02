import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле' }),
	phone: z.string().min(14, {message: 'Номер телефона не может быть меньше 11 символов'}),
	email: z.string().email({ message: 'Не верный формат электронной почты' }),
	description: z.string()
});

export type TypeMentor = z.infer<typeof formSchema>;