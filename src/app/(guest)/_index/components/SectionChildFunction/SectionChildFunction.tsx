import React from 'react';
import Image from "next/image";
import {Heading, Helper, Text, WhiteCard} from "@components";
import {CN} from "@/lib";

import './SectionChildFunction.scss';
import {Button} from "@/app/(guest)/_index/components/UI/Button/Button";

const block = CN('child-functions');

export const SectionChildFunction = () => {
	return (
		<section className={block()}>
			<WhiteCard className={block('title')}>
				<Heading data={{text: 'ОСНОВНЫЕ ФУНКЦИИ В ЛК РЕБЕНКА', tag: 'h2'}} cn={{size: 'h2', align: 'text-center'}}
				         className={block('heading')}/>
				<Text data={{
					text: 'Алина автоматически подбирает вопросы в зависимости от возраста и пола ребенка, начисляет игровые монеты исходя из бюджета каждой семьи.',
					tag: 'p'
				}} className={block('text', ['text'])}/>
				<img src="/images/index-new/bg-function.png" alt="" className={block('image')}/>
			</WhiteCard>
			<div className={block('cards')}>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>01</div>
					<Image src={"/images/index-new/cats/cat-child-1.png"} alt="" width={402} height={348} className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Вопросы викторин/тесты-отвечает на вопросы, познает и зарабатывает',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<ul className="mb-6 ml-6 list-disc text-black [&>li]:mt-2">
							<Text data={{
								text: 'Действия ребенка', tag: 'p'
							}} cn={{color: 'text-black'}} className="text font-bold"/>
							<li>
								<Text data={{
									text: 'Ищет правильный ответ в интернете', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Отвечает не правильно', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
						</ul>
						<ul className="mb-6 ml-6 list-disc text-black [&>li]:mt-2">
							<Text data={{
								text: 'Действия Алины', tag: 'p'
							}} cn={{color: 'text-black'}} className="text font-bold"/>
							<li>
								<Text data={{
									text: 'Поддерживает это, так как развивает когнитивные способности и в любом случае анализирует и запоминает информацию.', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Подбадривает и задает новый вопрос пока ребенок не начнет “зарабатывать.”', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
						</ul>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card', {right: true})}>
					<div className={block('numeric')}>02</div>
					<img src="/images/index-new/cats/cat-child-2.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'виртуальная копилка-осознанно учиться копить и тратить',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<ul className="mb-6 ml-6 list-disc text-black [&>li]:mt-2">
							<Text data={{
								text: 'Действия ребенка', tag: 'p'
							}} cn={{color: 'text-black'}} className="text font-bold"/>
							<li>
								<Text data={{
									text: 'Обменивает на деньги до достижения цели ', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Часто меняет цель накопления', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
						</ul>
						<ul className="mb-6 ml-6 list-disc text-black [&>li]:mt-2">
							<Text data={{
								text: 'Действия Алины', tag: 'p'
							}} cn={{color: 'text-black'}} className="text font-bold"/>
							<li>
								<Text data={{
									text: 'Визуально подсвечивает увеличивающийся срок накопления. ', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Объясняет на этом примере, что чем больше спонтанных покупок, тем дальше мечта.', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Объясняет что бы больше тратить нужно больше зарабатывать или ограничиться в хотелках.', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
							<li>
								<Text data={{
									text: 'Объясняет, что если менять цели, то ничего не добьешься и что с самого начала нужно понять, чего хочешь и расставлять приорететы.', tag: 'p'
								}} cn={{color: 'text-black'}} className="text"/>
							</li>
						</ul>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>03</div>
					<img src="/images/index-new/cats/cat-child-3.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Основные курсы по 12 топовым темам',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
						<Text data={{text: 'Учиться как можно использовать на практике.', tag: 'p'}} className="text"/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Пример: как строить свой бюджет, как снять показания счетчиков, как заработать на ИИ, как защитить от взлома в интернете.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card', {right: true})}>
					<div className={block('numeric')}>04</div>
					<img src="/images/index-new/cats/cat-child-4.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Мой бюджет (сервис для ребенка)',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center'
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'После прохождения фин. грамотности открывается сервис,обучающий введения доходом-расходов, планированию. Взаимосвязан с родительским сервисом семейный бюджет.',
							tag: 'p'
						}} cn={{color: 'text-black'}} className="text"/>
					</Helper>
				</WhiteCard>
				<WhiteCard className={block('card')}>
					<div className={block('numeric')}>05</div>
					<img src="/images/index-new/cats/cat-child-5.png" alt="" className={block('image-cat')}/>
					<div className={block('table-heading', ['text-center'])}>
						<Heading data={{
							text: 'Карта квестов',
							tag: 'h3'
						}} cn={{
							size: 'h3',
							align: 'text-center',
						}}/>
					</div>
					<Helper cn={{width: 'full', color: 'light-brown', shadow: true}} className={block('helper')}>
						<Text data={{
							text: 'Интерактивная карта заданий с целью получения нового уровня. Пример: изучить “мой бюджет” или убраться в комнате. Выше уровень- лучше развитие игрового персонажа, возможность получить более дорогой подарок от МОНЕТИКУМА.',
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