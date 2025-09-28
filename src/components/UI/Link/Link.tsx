import {useClassName} from "@hooks";
import Link from 'next/link'
import type {ILink} from './Link.types';
import classes from './Link.cn';
import './Link.scss';
import {Text} from "@components";
import {Slot} from "@radix-ui/react-slot";

export function LinkUI(props: ILink) {
	const {data, children, cn, className, disabled} = props;
	const styles = classes({...cn});
	const classNames = useClassName(styles.block, className);

	if (disabled) {
		return (
			<Slot>
				{children ?? <Text data={{text: data?.text, tag: 'p'}} />}
			</Slot>
		)
	}

	return (
		<Link
			className={classNames}
			href={data?.href || '#'}
			target={data?.target || undefined}
		>
			{data?.text || children}
		</Link>
	);
}
