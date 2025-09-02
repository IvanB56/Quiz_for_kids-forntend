'use client';
import React from 'react';
import Image from 'next/image';
import {CN} from '@/lib';
import {Heading, Helper, Text, WhiteCard} from "@components";
import {Button} from "@/app/(guest)/_index/components/UI/Button/Button";

import './SectionParentFunction.scss';

const block = CN('parent-function');

export const SectionParentFunction = () => {
	return (
		<section className={block()}>
			<Heading data={{text: 'Основные функции лк родителя ', tag: 'h2'}} cn={{size: 'h2', align: 'text-center'}}
			         className={block('heading')}/>
			<div className={block('cards')}>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>01</div>
					<Image src={"/images/index-new/cats/cat-parent-1.png"} alt="" width={402} height={348}
					       className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Сервис семейного бюджета',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Вы сами сможете упорядочить свою фин. грамотность. Сервис покажет «доходы-расходы». Покажет прогноз риска бюджета до 12 месяцев, покажет не нужные расходы. Графа «бюджет ребенка» интегрирована в «Мой бюджет» ребенка.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card', {right: true})}>
					<div className={block('numeric')}>02</div>
					<img src="/images/index-new/cats/cat-parent-2.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Психологическое тестирование',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Для себя и скрытое для ребенка, с получением результата.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>03</div>
					<img src="/images/index-new/cats/cat-parent-3.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Настройка  Лики',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
						<Text data={{text: 'Учиться как можно использовать на практике.', tag: 'p'}} className="text"/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'От формирования бюджета «карманных денег» исходя из своих возможностей, до выбора необходимых тем для ребенка или постановки задачи убраться в комнате, получит 5 по литературе.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card', {right: true})}>
					<div className={block('numeric')}>04</div>
					<img src="/images/index-new/cats/cat-parent-4.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Добавить других членов семьи',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Даже если бабушки-дедушки далеко и другие родственники, они смогут через свои ЛК наблюдать за успехами развития ребенка и участвовать в процессе деньгами. Это психологический сблизит семью.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>05</div>
					<img src="/images/index-new/cats/cat-parent-5.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Словарь детского/подросткового сленга',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center',
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Можно понять, о чем говорит ребенок, поговорить с ним на одном языке. Понять по сленгу находится ли он в группе риска.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card', {right: true})}>
					<div className={block('numeric')}>06</div>
					<img src="/images/index-new/cats/cat-parent-6.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Инструкция по использованию Монетикума',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center',
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: ' От того, как мотивировать ребенка, если ребенок «не хочет», до того, как получить дополнительные возможности платформы.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
			</div>
			<div className="flex flex-col">
				<Button/>
			</div>
		</section>
	);
};