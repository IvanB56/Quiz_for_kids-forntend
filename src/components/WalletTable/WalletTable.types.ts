import type {IChildrenAndClassName} from '@root/global';
export interface IWalletTable extends IChildrenAndClassName {
	data: {
		rows?: Array<{
			date?: string;
			deposited?: number;
			withdrawn?: number;
			balance?: number;
			piggyBank?: number;
		}>;
		totalEarned?: number;
		totalWithdrawn?: number;
	},
	cn?: {
		display?: string;
		gap?: string;
		margin?: string;
		padding?: string;
		width?: string;
	};
}
