import { CN } from '@lib/ClassBem';
import type { IGreetingsChild } from './GreetingsChild.types.ts';

export default function classes(cn: IGreetingsChild['cn']) {
	const BLOCK = CN('greetings-child');

	return {
		block: BLOCK({}, [cn?.background, cn?.padding]),
		elementGreeting: BLOCK('greeting'),
		elementWrapperImage: BLOCK('wrapper-image'),
		elementLeft: BLOCK('left'),
		elementRight: BLOCK('right'),
		elementImage: BLOCK('image'),
	};
}
