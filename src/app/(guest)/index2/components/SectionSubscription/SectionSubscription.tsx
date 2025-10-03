import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Button, Heading } from '@components';

import './SectionSubscription.scss';

const block = CN('subscription');

export const SectionSubscription = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading data={{text: 'МонетикУМ работает эффективно. Убедитесь уже сегодня.', tag: 'h3'}} cn={{size: 'h3', color: 'text-primary-white', align: 'text-center', margin: 'mb-7 sm:mb-11'}} className={block('heading')}/>
				<Heading data={{text: 'УСПЕЙТЕ ОФОРМИТЬ ПОДПИСКУ', tag: 'h2'}} cn={{size: 'h2', color: 'text-primary-white', align: 'text-center', margin: 'mb-9 sm:mb-11'}} className={block('heading')}/>
				<Button className={block('button-pay')}>Оформить подписку</Button>
			</div>
			<Image src={"/images/index2/bg-gradient-benefit.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
