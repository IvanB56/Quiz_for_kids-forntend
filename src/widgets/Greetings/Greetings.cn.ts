import { CN } from '@lib/ClassBem';
import type { IGreetings } from './Greetings.types.ts';

export default function classes(cn: IGreetings['cn']) {
	const BLOCK = CN('greetings');

	return {
		block: BLOCK({}, [cn?.background, cn?.padding]),
		elementLeft: BLOCK('left'),
		elementRight: BLOCK('right'),
	};
}
