export interface CoinsBalanceType {
	balance: number
}

export interface CoinsBalanceSchema extends CoinsBalanceType{
	isLoading: boolean,
	error?: {
		message: string
	}
}