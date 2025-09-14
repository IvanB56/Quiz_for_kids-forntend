import {FormEvent} from "react";

// Оригинальные типы для 4-шагового варианта
export type FormDataType = Record<'sum_coins' | 'settings' | 'count' | 'mode', string>;
export type PartialFormDataType = Pick<FormDataType, 'sum_coins' | 'settings'> & Partial<Pick<FormDataType, 'count' | 'mode'>>

// Новые типы для 2-шагового варианта
export type NewFormDataType = Record<'title' | 'description', string>;
export type PartialNewFormDataType = Partial<NewFormDataType>;

export type StepProps = {
	callback?: (data: { name: string, value: string }) => void;
	nextStepHandler?: () => void;
	prevStepHandler?: () => void;
	saveDataHandler?: (e?: FormEvent) => void;
	data: string;
}