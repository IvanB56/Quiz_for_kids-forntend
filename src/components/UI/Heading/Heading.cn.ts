import type { IHeading } from './Heading.types';
import { CN } from '@/lib';

export default function classes(cn: IHeading['cn']) {
	const BLOCK = CN('heading');

	return {
		block: BLOCK({
			[`${cn?.size}`]: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(cn?.size || ''),
			[`${cn?.weight}`]: ['fw400', 'fw500', 'fw600', 'fw700'].includes(cn?.weight || ''),
		}, [cn?.margin, cn?.color, cn?.align]),
	};
}
