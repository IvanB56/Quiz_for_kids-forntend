import type {IChildrenAndClassName} from '@root/global';

export interface ICoinsTotal extends IChildrenAndClassName {
	value: number;
	cn?: {
		margin?: string;
	};
}
