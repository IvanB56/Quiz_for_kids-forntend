export interface IWalletTable {
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
