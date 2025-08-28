import React from 'react';
import {CN} from "@/lib";
import {Heading, Text, WhiteCard} from "@components";

import './SectionHowTakeMoney.scss';
import Image from "next/image";

const block = CN('how-take-money');

export const SectionHowTakeMoney = () => {
	return (
		<section className={block()}>
			<div className="container">
				<Heading
					data={{text: 'Как заработать с МОНЕТИКУМОМ', tag: 'h2'}}
					cn={{size: 'h2', align: 'text-center'}}
					className={block('heading')}
				/>
				<WhiteCard className={block('card')}>
					<Text data={{
						text: '<span class="font-bold">Открыть новые возможности для ребенка</span> - для этого нужно в личном кабинете получить реферальную ссылку о отправить ее 3 знакомым мамам, которые будут пользоваться МОНЕТИКУМОМ.',
						tag: 'p'
					}} className={block('text', ['text'])}/>
					<div className={block('image')}>
						<Image src={'/images/index-new/section-how-take-money/img-1.jpg'} alt={''} fill objectFit="cover"/>
					</div>
					<div className={block('image')}>
						<Image src={'/images/index-new/section-how-take-money/img-2.jpg'} alt={''} fill objectFit="cover"/>
					</div>
					<Text data={{
						text: '<span class="font-bold">Заработать реальные деньги</span> - зайти в раздел ЛК в “Партнерскую программу”, получить рефералку и если знакомых мам больше трех, то заработать деньги.',
						tag: 'p'
					}} className={block('text', ['text'])}/>
				</WhiteCard>
			</div>
		</section>
	);
};