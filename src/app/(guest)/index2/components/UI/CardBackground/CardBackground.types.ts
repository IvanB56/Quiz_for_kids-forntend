import type {IChildrenAndClassName} from '@root/global';

export interface ICardBackground extends IChildrenAndClassName {
	data: {
		textData: string;
		imgSrc: string;
		imgSrcMobile?: string;
		imgWidth: number;
		imgHeight: number;
		arrowSrc?: string;
	};
	cn?: {
		variant?: string;
	};
	onArrowClick?: () => void;
}
