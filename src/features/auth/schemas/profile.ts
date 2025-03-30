import {z} from 'zod';

export const formSchema = z.object({
	surname: z.string().min(1, {message: 'Обязательное поле'}),
	name: z.string().min(1, {message: 'Обязательное поле'}),
	birth: z.string().date('Не валидный формат даты'),
	region: z.string().min(1, {message: 'Обязательное поле'}),
	patronymic: z.string()
});

export type TypeProfile = z.infer<typeof formSchema>;
