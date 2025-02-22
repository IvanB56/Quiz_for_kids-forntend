import type { IChildrenAndClassName } from '@root/global';

export interface IHeading extends IChildrenAndClassName {
	data: {
		tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		text: string;
	};
	cn?: {
		size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		weight?: 'fw400' | 'fw500' | 'fw600' | 'fw700';
		color?: string;
		margin?: string;
		align?: string;
	};
}
