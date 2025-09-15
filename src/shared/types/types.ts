export type TRegion = Record<'slug' | 'name', string>[];

export type TUser = {
	data: {
		user_id: number;
		email?: string;
		phone: string;
		name: string;
		surname?: string;
		patronymic?: string;
		birthdate?: string;
		region?: {
			slug: string;
			name: string;
		},
		type: "Sponsor"
	}
}

export interface TPlaySettings {
	data: TPlaySettingsData;
}

export interface TPlaySettingsData {
	starts_at: string
	ends_at: string
	active: boolean
	mode: string
	budget: number
	questions_quantity: number
	categories: Category[]
}

export interface Category {
	slug: string
	name: string
	description: string
}
