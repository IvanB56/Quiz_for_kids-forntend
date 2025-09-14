import {z} from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, "Имя обязательно"),
	birthdate: z.date({message: "Дата рождения обязательна"})
});

export type TypeChildCreate = z.infer<typeof formSchema>;