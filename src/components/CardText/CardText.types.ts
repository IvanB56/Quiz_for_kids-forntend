import type {IChildrenAndClassName} from '@root/global';

export interface ICardText extends IChildrenAndClassName {
	data: {
		textItems?: Array<{
			title?: string;
			titleColor?: 'text-primary-grey' | 'text-black' | 'text-primary-white' | 'text-primary-red' | 'text-primary-blue';
			titleSize?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-body-4' | 'text-body-5';
			titleWeight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
			titleMargin?: string;
		}>;
	};
	cn?: {
		display?: string;
		gap?: string;
		margin?: string;
		padding?: string;
		width?: string;
		background?: string;
	};
}
