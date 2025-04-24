export interface IUser  {
	data: {
		id: number,
		email: string | null,
		phone: string | null,
		name: string | null,
		surname: string | null,
		patronymic: string | null,
		birth: string | null,
		region: string | null,
	}
}