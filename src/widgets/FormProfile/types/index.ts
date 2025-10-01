import {FormEvent} from "react";

// Оригинальные типы для 4-шагового варианта
export type FormDataType = {
	budget: number;
	questions_quantity?: number;
	categories?: Array<string>;
	mode?: "combined" | "quiz" | "text-quiz";
}

// Новые типы для 2-шагового варианта
export type NewFormDataType = Record<'title' | 'description', string>;
export type PartialNewFormDataType = Partial<NewFormDataType>;

export type StepProps = {
	callback?: (data: { name: string, value: string | string[] }) => void;
	nextStepHandler?: () => void;
	prevStepHandler?: () => void;
	saveDataHandler?: (e?: FormEvent, value?: string) => void;
	data: number | string;
}