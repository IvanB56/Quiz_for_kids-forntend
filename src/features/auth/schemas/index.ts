import {ZodError} from 'zod';

export type TypeError = ZodError;
export type { TypeSupport } from './support';
export type { TypeMentor } from './mentor';
export { type TypeHomeTask, formSchema } from './home-task';
