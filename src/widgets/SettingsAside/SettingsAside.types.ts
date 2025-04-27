export interface ISettingsAside {
	data: {
		pagesLink: {
			name: string;
			href: string;
		}[]
	};
	cn?: {
		padding?: string;
		margin?: string;
	}
}