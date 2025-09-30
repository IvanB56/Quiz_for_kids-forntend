import {CN} from "@/lib";
import {ICardBackground} from './CardBackground.types';

export default function classes(cn: ICardBackground['cn']) {
	const BLOCK = CN('card-background');

	return {
		block: BLOCK({
			[`${cn?.variant}`]: !!cn?.variant,
		}),
		elementBackground: BLOCK('background'),
		elementImage: BLOCK('image'),
		elementContent: BLOCK('content'),
		elementDescription: BLOCK('description'),
	}
}
