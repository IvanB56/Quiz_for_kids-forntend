import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import {Heading, Text} from "@components";
import {useClassName} from "@hooks";

import './SectionStock.scss';
import {Button} from "@/app/(guest)/_index/components/UI/Button/Button";

const block = CN('stock');

export const SectionStock = () => {
	return (
		<section className={block()}>
			<Image src={"/images/index-new/bg-stock.jpg"} alt={""} fill style={{objectFit: 'cover'}} loading="lazy"/>
			<div className={block('inner')}>
				<div className={block('headers-wrapper')}>
					<Heading data={{
						tag: 'h2'
					}} cn={{size: 'h2', margin: 'm-auto'}} className={block('heading')}>
						Все это можно получить за подписку по акции, <p className="text-with-bg"><span
						className={"bg-white"}></span><span>«мгновенный старт»</span></p>, <br /> всего за
					</Heading>
					<Heading data={{
						tag: 'h2'
					}} cn={{size: 'h2'}} className={block('price')}>
						<span className="text-with-bg"><span className={"bg-blue"}></span><span>3599 рублей в год</span></span> за
						всех детей в семье!
					</Heading>
				</div>
				<ul className={block('list')}>
					<Text
						data={{
							text: 'Вы получаете все вышеописанные функции если в вашей семье:',
							tag: 'p'
						}}
						cn={{size: 'text-body-1', weight: 'font-semibold'}}
						className={useClassName(block("text"), "text")}
					/>
					<li><Text data={{
						text: '• 1 ребенок - всего 300 руб в месяц;',
						tag: 'p'
					}} cn={{size: 'text-body-1'}} className={useClassName(block("text"), "text")}/>
					</li>
					<li>
						<Text data={{
							text: '• 2 ребенка – 150 руб в месяц;',
							tag: 'p'
						}} cn={{size: 'text-body-1'}} className={useClassName(block("text"), "text")}/>
					</li>
					<li>
						<Text data={{
							text: '• 3 ребенка – 100 руб в месяц;',
							tag: 'p'
						}} cn={{size: 'text-body-1'}} className={useClassName(block("text"), "text")}/>
					</li>
				</ul>
				<Text data={{
					text: 'К тарифам и подписке жми ',
					tag: 'p'
				}} cn={{size: 'text-body-1', margin: 'mt-[2.5rem]', weight: 'font-semibold'}}
				      className={useClassName(block("text"), "text text-center")}/>
				<Button/>
			</div>
		</section>
	);
};