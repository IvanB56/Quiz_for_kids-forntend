import {FormEvent} from "react";

export type FormDataType = Record<'sum_coins' | 'settings' | 'count' | 'mode', string>;
export type PartialFormDataType = Pick<FormDataType, 'sum_coins' | 'settings'> & Partial<Pick<FormDataType, 'count' | 'mode'>>

export type StepProps = {
	callback?: (data: { name: string, value: string }) => void;
	nextStepHandler?: () => void;
	prevStepHandler?: () => void;
	saveDataHandler?: (e: FormEvent) => void;
	data: string;
}