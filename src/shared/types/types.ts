export type TRegion = Record<'slug' | 'name', string>[];

export type TUser = {
	data: {
		user_id: number,
		phone: string,
		type: 'Sponsor' | "Student"
		name?: string,
		email?: string,
		surname?: string,
		patronymic?: string,
		birthdate?: string,
		region?: { slug: string, name: string },
	}
}