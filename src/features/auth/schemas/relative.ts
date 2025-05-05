import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Обязательное поле для заполнения' }).max(50, { message: 'Имя пользователя не должно превышать 50 символов' }),
	relative: z.string(),
});

export type TypeRelative = z.infer<typeof formSchema>;
