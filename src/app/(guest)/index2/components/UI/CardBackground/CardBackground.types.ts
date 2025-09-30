import type {IChildrenAndClassName} from '@root/global';

export interface ICardBackground extends IChildrenAndClassName {
	data: {
		textData: string;
		imgSrc: string;
		imgWidth: number;
		imgHeight: number;
	};
	cn?: {
		variant?: string;
	};
}
