import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Button, Heading } from '@components';

import './SectionSubscriptionInstant.scss';

const block = CN('subscription-instant');

export const SectionSubscriptionInstant = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading data={{text: 'Акция «Мгновенный старт»', tag: 'h3'}} cn={{size: 'h3', color: 'text-primary-white', align: 'text-center', margin: 'mb-16 sm:mb-36'}} className={block('heading')}/>
				<Heading data={{text: 'Много пользы за 3600рублей в год для всех детей в семье', tag: 'h3'}} cn={{size: 'h3', color: 'text-primary-white', align: 'text-center', margin: 'mb-24 sm:mb-40'}} className={block('heading')}/>
				<Button className={block('button-pay')}>Оформить подписку</Button>
			</div>
			<Image src={"/images/index2/bg-gradient-subscription-instant.png"} alt="" fill className={block('background')}/>
			<Image src={"/images/index2/bg-gradient-subscription-instant-xs.png"} alt="" fill className={block('background-xs')}/>
		</section>
	);
};
