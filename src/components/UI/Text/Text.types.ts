import type { IChildrenAndClassName } from '@root/global';

export interface IText extends IChildrenAndClassName {
	data: {
		tag: 'div' | 'p' | 'span' | 'b' | 'i' | 'strong' | 'em' | 'u' | 's';
		text?: string;
	};
	cn?: {
		size?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-body-4' | 'text-body-5';
		weight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
		color?: 'text-primary-grey' | 'text-black';
		margin?: string;
	};
}
