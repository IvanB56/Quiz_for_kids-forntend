import type {IChildrenAndClassName} from '@root/global';

export interface IRange extends IChildrenAndClassName {
	label: string,
	step: number,
	min: number,
	max: number,
	minLabel?: number;
	maxLabel?: number;
	defaultValue: number[],
	onChange?: (values: number[]) => void,
	className?: string,
	cn?: {
		margin?: string;
	}
}
