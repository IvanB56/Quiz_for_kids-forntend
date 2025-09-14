import type {IChildrenAndClassName} from '@root/global';

export interface ICardWallet extends IChildrenAndClassName {
	data: {
		earningsItems?: Array<{
			valueDailyEarnings?: number;
			valueTotalWallet?: number;
			valueInput?: number;
			title?: string;
			titleSize?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-body-4' | 'text-body-5';
		}>;
		buttonDescription?: string;
		textRequest?: string;
	};
	cn?: {
		display?: string;
		gap?: string;
		margin?: string;
		padding?: string;
		width?: string;
	};
}
