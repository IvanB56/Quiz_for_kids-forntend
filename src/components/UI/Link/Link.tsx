import {useClassName} from "@hooks";
import Link from 'next/link'
import type {ILink} from './Link.types';
import classes from './Link.cn';
import './Link.scss';

export function LinkUI(props: ILink) {
	const {data, children, cn, className} = props;
	const styles = classes({...cn});

	return (
		<Link className={useClassName(styles.block, className)} href={data?.href || '#'}
		      target={data?.target || undefined}>
			{data?.text || children}
		</Link>
	);
}
