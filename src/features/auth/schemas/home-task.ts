import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле' }),
	description: z.string().min(1, { message: 'Обязательное поле' }),
	price: z.string({
		required_error: "Обязательное поле",
		invalid_type_error: "Значение должно быть числом",
	}).min(1, {message: 'Введите сумму'})
});

export type TypeHomeTask = z.infer<typeof formSchema>;
