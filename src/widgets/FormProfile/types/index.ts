import {FormEvent} from "react";

export type FormDataType = {
	budget: number;
	questions_quantity?: number;
	categories?: Array<string>;
	mode?: "combined" | "quiz" | "text-quiz";
}

export type StepProps = {
	callback?: (data: { name: string, value: string }) => void;
	nextStepHandler?: () => void;
	prevStepHandler?: () => void;
	saveDataHandler?: (e: FormEvent, value?: string) => void;
	data: number | string;
}