'use client';
import React, {MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {CN} from '@/lib';
import {Heading, Text, WhiteCard} from "@components";
import {functionsLK} from '@assets/mock/functionsLK';

import './SectionParentFunction.scss';

const block = CN('parent-function');

export const SectionParentFunction = () => {
	const [text, setText] = useState<string>(functionsLK[0].text);
	const [currentId, setCurrentId] = useState<number>(0);
	const cardsRef = useRef<Element[]>(null);

	const switchCardClass = useCallback((id: number = currentId) => {
		cardsRef?.current?.forEach(card => {
			card.classList.remove('active');
			if (card.getAttribute('data-id') === String(id)) {
				card.classList.add('active');
			}
		});

		setText((prev) => functionsLK.find(item => item.id === id)?.text || prev);
	}, [currentId]);

	const cardHoverHandler = (event: MouseEvent<HTMLDivElement>) => {
		const target = event.currentTarget;
		const id = Number(target.getAttribute('data-id')) || 0;
		setCurrentId(id);

		if (id) {
			switchCardClass(id);
		}
	}

	useEffect(() => {
		cardsRef.current = [...document.querySelectorAll(`.${block('function-card')}`)];

		// const timer = setInterval(() => {
		// 	setCurrentId(prev => {
		// 		return prev >= functionsLK.length ? 1 : prev + 1;
		// 	})
		// }, 5000);

		// return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		switchCardClass();
	}, [currentId, switchCardClass]);

	return (
		<section className={block()}>
			<div className="container">
				<Heading
					data={{text: 'Основные функции лк родителя', tag: 'h2'}}
					cn={{size: 'h2', align: 'text-center'}}
					className={block('heading')}
				/>
			</div>
			<div className="container">
				<div className={block('function-cards')}>
					<WhiteCard className={block('root-card')}>
						<Text data={{text, tag: 'p'}} className="text text-center"/>
					</WhiteCard>
					<div className={block('functions')}>
						{
							functionsLK.map((item, index) => (
								<WhiteCard key={item.id} data-id={item.id} className={block('function-card', [!index ? 'active' : ''])}
								           on={{onMouseEnter: cardHoverHandler}}>
									<Text data={{text: item.title, tag: 'p'}} className="text"/>
								</WhiteCard>
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
};