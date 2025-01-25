import type { IHeading } from './Heading.types';

export default function classes(cn: IHeading['cn']) {
	const SIZE = (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(cn?.size || '') && cn?.size) || '';
	const WEIGHT = (['fw400', 'fw500', 'fw600', 'fw700'].includes(cn?.weight || '') && cn?.weight) || '';

	return {
		block: [SIZE, WEIGHT, cn?.margin, cn?.color].join(' ').trim().replace('  ', ' '),
	};
}
