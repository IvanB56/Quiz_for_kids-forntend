import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Button, Heading } from '@components';

import './SectionPositiveEffects.scss';

const block = CN('positive-effects');

export const SectionPositiveEffects = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading data={{text: 'ПРИМЕРЫ ПОЛОЖИТЕЛЬНЫХ ЭФФЕКТОВ', tag: 'h2'}} cn={{size: 'h2', align: 'text-center', margin: 'mb-9 sm:mb-11'}} className={block('heading')}/>
				<Button className={block('button-pay')}>Оформить подписку</Button>
			</div>
			<Image src={"/images/index2/bg-gradient-positive-effects.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
