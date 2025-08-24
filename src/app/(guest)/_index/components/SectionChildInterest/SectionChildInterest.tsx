import React from 'react';
import {CN} from "@/lib";
import {Heading, SectionWhite, Text} from "@components";

import './SectionChildInterest.scss';

const block = CN('child-interest');

export const SectionChildInterest = () => {
	return (
		<div className={block('container')}>
			<SectionWhite overflow="overflow-visible" className={block()}>
				<img src="/images/index-new/interest-img.png" alt="" className={block('image')}/>
				<Heading data={{text: 'Интерес ребенка и игровая форма ', tag: 'h2'}} cn={{size: 'h2'}} className={block('heading')}/>
				<ul className={block('list')}>
					<li><Text data={{text: 'Получение денег - самый главный мотив. Ребенок точно поймет, что получать “деньги по правилам” лучше, чем через манипуляции и нервы.', tag: 'p'}} className={block('text', ['text'])}/></li>
					<li><Text data={{text: 'Карта квестов - выполнять квесты, получать уровни и возможность просто так получить каждый месяц смартфон. Подарок с каждым уровнем становится дороже. Пример: уберись в комнате и поделись этим с мамой.', tag: 'p'}} className={block('text', ['text'])}/></li>
					<li><Text data={{text: 'Приветствие -  Лика каждый день приветствует на разных языках России и мира.', tag: 'p'}} className={block('text', ['text'])}/></li>
					<li><Text data={{text: 'Шкала развития - есть развивающиеся игровые персонажи, возможность выбрать стиль оформления или создать свой.', tag: 'p'}} className={block('text', ['text'])}/></li>
				</ul>

			</SectionWhite>
		</div>
	);
};