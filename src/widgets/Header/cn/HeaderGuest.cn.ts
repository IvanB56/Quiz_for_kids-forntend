import {CN} from '@lib/ClassBem';
import {TypeHeaderGuest} from '../types/HeaderGuest.type';

export function classes(cn: TypeHeaderGuest['cn']) {
	const BLOCK = CN('header');

	return {
		block: BLOCK({}, [cn?.padding, cn?.border]),
		elementContainer: BLOCK('container'),
		elementMenu: BLOCK('menu'),
		elementButtons: BLOCK('buttons'),
	}
}
