import {CN} from "@/lib";

export function classes() {
	const BLOCK = CN('banner-static');

	return {
		block: BLOCK(),
		content: BLOCK('content'),
		background: BLOCK('background'),
		heading: BLOCK('heading'),
		subtitle: BLOCK('subtitle'),
		wrapperCheck: BLOCK('wrapper-check'),
		svgCheck: BLOCK('svg-check'),
		image: BLOCK('image'),
		wrapperQuote: BLOCK('wrapper-quote'),
		badge: BLOCK('badge'),
		description: BLOCK('description'),
	}
}
