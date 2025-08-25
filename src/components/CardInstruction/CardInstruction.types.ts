import type { IChildrenAndClassName } from '@root/global';
import type { StaticImageData } from 'next/image';

export interface ICardInstraction extends IChildrenAndClassName {
	data: {
		text: string;
		image: string | StaticImageData;
	};
	cn?: {
		margin?: string;
		modifier?: string;
	};
}
