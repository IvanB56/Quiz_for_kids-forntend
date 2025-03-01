import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { IProps } from "@/widgets/AboutBlock/types";
import { classes } from '@/widgets/AboutBlock/aboutBlock.cn';
import { Text } from '@components';
import './aboutBlock.scss';



export const AboutBlock: React.FC<IProps> = ({ cn, data }) => {
	const styles = classes(cn);
	const { text, image } = data;

	return (
		<section className={styles.block}>
			<div className={styles.elementTextWrapper}>
				<Text data={{ text, tag: 'p' }} cn={{ size: 'text-body-1', color: 'text-primary-white' }} />
			</div>
			<div className={styles.elementImageWrapper}>
				<Image
					src={image}
					alt={'image'}
					fill
					objectFit={'contain'}
					objectPosition={cn?.direction === 'reverse' ? 'right' : 'left'}
				/>
			</div>
		</section>
	);
};
