import type {IChildrenAndClassName} from '@root/global';

export interface ICardHomework extends IChildrenAndClassName {
	data: {
		complexity: string;
	};
	cn?: {
		margin?: string;
	};
}
