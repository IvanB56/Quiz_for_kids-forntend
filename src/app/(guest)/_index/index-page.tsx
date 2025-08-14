import React from 'react';
import {Playfair_Display, Roboto} from 'next/font/google';
import {BannerAnimate, SectionGrid} from "@widgets";
import {Heading, Text, WhiteCard} from "@components";
import {useClassName} from "@hooks";
import './index-page.scss';

import {services} from '@assets/mock';

const robotoFont = Roboto({
	weight: ['300', '400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-roboto',
});

const playFairDisplayFont = Playfair_Display({
	weight: ['400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-play-fair'
});

export const IndexPage = () => {
	return (
		<div className={useClassName('index-page', robotoFont.variable, playFairDisplayFont.variable)}>
			<BannerAnimate/>
			<SectionGrid
				rows={'auto'}
				cols={2}
				gap={{max: 50, min: 20}}
				title={() => (
					<Heading data={{text: 'Развивающе-мотивационная платформа ', tag: 'h1'}} cn={{size: 'h1', align: 'text-center'}} />
				)}
				subtitle={() => (
					<Text
						data={{text: 'для ребенка<br /> и уникальные сервисы для родителей', tag: 'p'}}
						className={'subtitle'}
					/>
				)}
				className={'services'}
				classNameBody={'services__body'}
			>
				{
					services?.map((service, index) => (
						<WhiteCard key={index}>
							<img src={`images/index-new/gif/${service.icon}.gif`} alt=""/>
							<Text data={{text: service.text, tag: 'p'}} className={"text"} />
						</WhiteCard>
					))
				}
			</SectionGrid>
		</div>
	);
};