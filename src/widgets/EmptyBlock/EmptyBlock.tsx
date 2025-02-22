import React from 'react';
import Image from 'next/image';
import { cn } from '@utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Heading, Text } from '@components';

export function EmptyBlock(props: {
	imagePosition: 'right' | 'left',
	image: string | StaticImport,
	isBgGrey?: boolean
}) {
	const imageSizes = {
		width: props.imagePosition === 'left' ? 600 : 400,
		height: props.imagePosition === 'left' ? 400 : 600,
	};

	return (
		<div className={cn('py-[100px] max-md:py-[40px]', {
			'bg-section-grey': props.isBgGrey,
		})}>
			<div className={cn('container flex relative h-full justify-between items-center', {
				'flex-row-reverse': props.imagePosition === 'right',
			})}>
				<Image src={props.image} alt={'image-empty'} {...imageSizes} />
				<div className={'flex flex-col w-2/5 items-center justify-center'}>
					<Heading data={{ text: 'Learning and teaching online, made easy.', tag: 'h2' }} />
					<Text data={{
						text: 'Gain subject certification or earn money while teaching online with GlobalTalk.',
						tag: 'p',
					}} cn={{ size: 'text-body-2', color: 'text-primary-grey', margin: 'mt-3' }} />
				</div>
			</div>
		</div>
	);
}
