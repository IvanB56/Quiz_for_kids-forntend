import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('profile-heading');

	return {
		block: BLOCK(),
		elementInfo: BLOCK('info'),
		elementText: BLOCK('text'),
		elementImages: BLOCK('images'),
		elementCoins: BLOCK('coins'),
		elementEarned: BLOCK('earned'),
		elementBank: BLOCK('bank'),
	}
}