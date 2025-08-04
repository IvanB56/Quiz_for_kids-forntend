import type { IChildrenAndClassName } from '@root/global';

export interface ICheckboxWithLabel extends IChildrenAndClassName {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	cn?: {
		margin?: string;
	};
}
