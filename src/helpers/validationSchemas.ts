import {z, type ZodError} from "zod";

export const schemas = z.object({
	username: z.string({
		required_error: 'Обязательное поле'
	}).trim().min(2, {message: 'Длина имени должна быть больше 2 символов'}),
	email: z.string({
		required_error: 'Обязательное поле'
	}).trim().email({message: 'Не правильно заполнено поле с почтой'}),
	password: z.string({
		required_error: 'Обязательное поле'
	}).min(6, {message: 'Пароль не может быть меньше 8 символов'}),
	'password-repeat': z.string({
		required_error: 'Обязательное поле'
	}).min(6, {message: 'Пароль не может быть меньше 8 символов'})
}).catchall(z.string());

export type TypeSchema = z.infer<typeof schemas>;
export type TypeError = ZodError;