import type { IChildrenAndClassName } from '@root/global';

// Контролируемый режим (внешнее состояние)
export interface ICheckboxWithLabelControlled extends IChildrenAndClassName {
	labelBefore?: string;
	label?: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	cn?: {
		margin?: string;
	};
}

// Неконтролируемый режим (внутреннее состояние)
export interface ICheckboxWithLabelUncontrolled extends IChildrenAndClassName {
	labelBefore?: string;
	label?: string;
	defaultChecked?: boolean;
	onToggle?: (checked: boolean, label?: string) => void;
	cn?: {
		margin?: string;
	};
}

export type ICheckboxWithLabel = ICheckboxWithLabelControlled | ICheckboxWithLabelUncontrolled;
