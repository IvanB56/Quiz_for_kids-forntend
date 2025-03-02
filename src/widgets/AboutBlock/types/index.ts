import { PropsWithChildren } from "react";

export interface IProps extends PropsWithChildren {
	data: Record<'text' | 'image', string>;
	cn?: {
		direction?: 'reverse';
		margin?: string;
		padding?: string;
	};
}
