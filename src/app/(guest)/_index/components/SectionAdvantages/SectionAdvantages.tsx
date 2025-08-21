import React from 'react';
import {advantages} from "@assets/mock";
import {Text, WhiteCard} from "@components";
import {SectionGrid} from "@widgets";
import {useClassName} from "@hooks";
import {CN} from "@/lib";

import './SectionAdvantages.scss';

const block = CN('advantages');

export const SectionAdvantages = () => {
	const textClass = useClassName(block('card-text'), 'text');
	return (
		<SectionGrid rows={'auto'} cols={3} className={block()} classNameBody={block('body')}>
			{
				advantages.map((item, index) => (
					<WhiteCard key={index} className={block('card')}>
						<img src={`images/index-new/gif/${item.icon}.gif`} alt="" className={block('card-image')}/>
						<Text data={{text: item.text, tag: 'p'}} className={textClass} />
					</WhiteCard>
				))
			}
		</SectionGrid>
	);
};