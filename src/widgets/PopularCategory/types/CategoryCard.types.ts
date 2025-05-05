export type TypeCategoryCard = {
	data: {
		card: {
			name: string;
			image: string;
			link?: string;
		};
	};
	cn?: {
		border?: string;
		boxShadow?: string;
		bgColor?: string;
	};
};
