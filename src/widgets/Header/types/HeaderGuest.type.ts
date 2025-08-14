export type TypeHeaderGuest = {
	data?: {
		page?: 'settings' | 'guest'
	}
	cn?: Partial<Record<'padding' | 'border', string>>
}
