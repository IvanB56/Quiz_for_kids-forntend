import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Heading, Text } from '@components';

import './SectionSimulator.scss';
import { useClassName } from '@hooks';

const block = CN('simulator');

export const SectionSimulator = () => {
	const dataSimulator = {
		checks: [
			{
				svg: 'green',
				text: 'Развили навыки от финансовой грамотности до психологии взаимоотношений'
			},
			{
				svg: 'green',
				text: 'Научились думать и трудиться'
			},
			{
				svg: 'green',
				text: 'Стали бесконфликтными'
			},
			{
				svg: 'green',
				text: 'Появились ответственность и дисциплина'
			},
			{
				svg: 'green',
				text: 'Начали ценить родительский труд и заботу'
			},
		]
	}

	return (
		<section className={block()}>
			<div className={block('container')}>
				<div className={block('wrapper-image')}>
					<Image src={"/images/index2/simulator/img-simulator-1.webp"} width={246} height={369} alt="" className={block('img-first')}/>
					<Image src={"/images/index2/simulator/img-simulator-2.webp"} width={251} height={376} alt="" className={block('img-second')}/>
					<Image src={"/images/index2/simulator/img-simulator-3.webp"} width={304} height={419} alt="" className={block('img-third')}/>
				</div>
				<div className={block('wrapper-content')}>
					<Heading data={{text: 'МонетикУМ – это развивающий тренажер, которЫЙ подготовит к реальной жизни', tag: 'h2'}} cn={{size: 'h2', margin: 'mb-10 sm:mb-11'}} className={block('heading')}/>
					<div className={block('content-mobile')}>
						<Text data={{text: 'Вы хотели, чтобы ваши дети:', tag: 'p'}} cn={{ size: 'text-body-1', weight: 'font-bold', margin: 'mb-5 sm:mb-3'}} className={block('subtitle')} />
						{dataSimulator.checks.map((item, idx) => (
							<div className={useClassName(block('wrapper-check'))} key={idx}>
								<svg className={useClassName(block('svg-check'), `${item.svg}`)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
									<path d="M41.6663 13.8889L18.7497 36.8056L8.33301 26.3889" stroke="var(--color-check, #1A921A)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								<Text data={{text: item.text, tag: 'p'}} cn={{ size: 'text-body-1', weight: 'font-medium'}} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Image src={"/images/index2/bg-gradient-simulator.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
