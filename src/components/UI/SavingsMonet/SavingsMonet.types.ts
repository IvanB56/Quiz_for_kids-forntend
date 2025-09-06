import type {IChildrenAndClassName} from '@root/global';

export interface ISavingsMonet extends IChildrenAndClassName {
	data: {
		title?: string;
		currentAmount: number;
		targetAmount: number;
		percentage: number;
	};
	cn?: {
		margin?: string;
	};
}
