import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('wallet-table');

	return {
		block: BLOCK(),
		elementTitle: BLOCK('title'),
		elementContainer: BLOCK('container'),
		elementFooter: BLOCK('footer'),
		elementFooterLabel: BLOCK('footer-label'),
		elementFooterValue: BLOCK('footer-value'),
	}
}
