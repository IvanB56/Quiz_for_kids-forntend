export interface QuizCategory {
	slug: string;
	name: string;
	description: string;
	preview: {
		original_name: string
		alt: string,
		relativeUrl: string
	}
}

export interface QuizCategoryScheme {
	data?: QuizCategory[],
	isLoading: boolean,
	error?: string
}