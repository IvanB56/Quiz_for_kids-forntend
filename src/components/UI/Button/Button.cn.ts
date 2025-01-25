import {CN} from "@lib/ClassBem";
import {IButton} from "./Button.type";

export function classes(cn?: IButton['cn']) {
	const BLOCK = CN('button');

	return {
		block: BLOCK({}, [cn?.background, cn?.color, cn?.margin, cn?.width])
	}
}
