import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import {Heading, Text, WhiteCard} from "@components";

import './SectionBenefit.scss';

const block = CN('benefit');

export const SectionBenefit = () => {
	return (
		<section className={block()}>
			<Heading data={{text: 'Ваша выгода ', tag: 'h2'}} cn={{size: 'h2', align: 'text-center'}} className={block('heading')}/>
			<WhiteCard className={block('card')}>
				<Text data={{
					text: 'Вы и ваши дети получают готовый функционал, который могут позволить только в элитных школах, но МонетикУМ пошел дальше, от теории и занялся выработкой практических навыков. Если нужно убрать многие десятки часов рутины, сэкономить более 100 000 и приучить ребенка к полезному, то МонетикУМ станет вашим надежным помощником.',
					tag: 'p'
				}} className="text" />
				<Image src={"/images/index-new/bg-benefit.png"} alt="" width={400} height={730} className={block('image')}/>
			</WhiteCard>
		</section>
	);
};