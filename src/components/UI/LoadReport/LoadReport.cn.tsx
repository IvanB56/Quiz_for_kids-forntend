import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('load-report');

	return {
		block: BLOCK(),
		elementSlots: BLOCK('slots'),
		elementSlot: BLOCK('slot'),
		elementImage: BLOCK('image'),
		elementAddReport: BLOCK('add-report'),
		elementPlus: BLOCK('plus'),
		elementText: BLOCK('text'),
		elementInput: BLOCK('input'),
	}
}
