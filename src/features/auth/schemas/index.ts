import {ZodError} from 'zod';

export type TypeError = ZodError;
export type { TypeLogin } from './login';
export type { TypeSupport } from './support';
export type { TypeMentor } from './mentor';
export type { TypeRegistration } from './registration';
export { type TypeHomeTask, formSchema } from './home-task';
