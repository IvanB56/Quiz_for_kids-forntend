import type {IChildrenAndClassName} from '@root/global';

export interface ILink extends IChildrenAndClassName {
	data: {
		href: string;
		text?: string;
		target?: string;
	};
	cn?: {
		size?: 'text-big';
		weight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
		margin?: string;
		active?: boolean;
		color?: 'text-black';
	};
}
