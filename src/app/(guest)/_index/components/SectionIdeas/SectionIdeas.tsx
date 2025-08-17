import React from 'react';
import {Heading, SectionWhite, Text, WhiteCard} from "@components";
import {CN} from "@/lib";

import './SectionIdeas.scss';

const block = CN('ideas');

export const SectionIdeas = () => {
	return (
		<div className={block('container')}>
			<SectionWhite overflow="overflow-visible" className={block()}>
				<img src="/images/index-new/bg-ideas.png" alt="" className={block('image')}/>
				<Heading data={{text: 'Идея и принцип МОНЕТИКУМА ', tag: 'h2'}} cn={{size: 'h2'}} className={block('heading')}/>
				<Text data={{
					text: 'Карманные деньги, сладости,игры/игрушки от родителей, бабушек-дедушек, других родных - это <span class="text-[#FF9900]">заработок ребенка</span> и чем меньше в нем системы, осознания тем больше родители получают проблем в процессе воспитания и сидящего на шее даже после 18, 20, 30 лет.',
					tag: 'p'
				}} className={block('text', ['text'])}/>
			</SectionWhite>
			<WhiteCard className={'items-center justify-center'}>
				<Text data={{
					text: 'МОНЕТИКУМ - превращает заработок ребенка в <span class="text-[#FF9900]">инструмент воспитания</span>, а не просто способ получить от вас карманные деньги.',
					tag: 'p'
				}} className={'text-center'} />
			</WhiteCard>
			<WhiteCard className={'items-center justify-center flex-col'}>
				<Text data={{
					text: 'Ребенок начинает их зарабатывать своим умом и трудом, отвечая на <span class="text-[#FF9900]">ежедневные викторины/тесты от Алины</span>, можно добавить домашние дела и поощрение за школьные оценки.',
					tag: 'p'
				}} className={'text-center'} />
				<Text data={{
					text: 'За правильные ответы начисляются игровые монеты, которые можно обменять на реальные деньги или начать копить. ',
					tag: 'p'
				}} className={'text-center'} />
			</WhiteCard>
		</div>
	);
};