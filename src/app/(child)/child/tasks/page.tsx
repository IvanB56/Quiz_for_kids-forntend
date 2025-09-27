'use client';
import React, {useState} from 'react';
import {Button, CardAnswers, CoinsTotal, Heading, SectionWhite, Text} from '@components';

import './task.scss';

const Earnings = () => {
	const [value, setValue] = useState(0);
	const [current, setCurrent] = useState(1);
	const [show, setShow] = useState(false);

	const buttonClick = (e) => {
		const target = e.target;
		target.classList.add('selected');
		if (target.getAttribute('data-success') === 'true') {
			setValue(prev => prev + 15);
		} else {
			setValue(prev => Math.max(prev - 15, 0));
		}
		setShow(true)
	}

	return (
		<div className="task">
			<Heading data={{text: "Викторины", tag: 'h1'}}/>
			{/*<QuizQuestion*/}
			{/*	question={'В каком году родился А. С. Пушкин?'}*/}
			{/*	// options={["1800г", "1825г", "1798г", "1799г"]}*/}
			{/*	correctAnswer="1799г"*/}
			{/*	timer="01:30"*/}
			{/*	score={15}*/}
			{/*/>*/}
			{current === 1 && <SectionWhite overflow="overflow-visible" className="mt-10 relative">
				<Heading data={{text: 'В каком году родился А. С. Пушкин?', tag: 'h3'}} cn={{align: 'text-center'}}/>
				<div className="flex absolute left-8 right-8 top-8 justify-between">
					<Text data={{text: '-15', tag: 'span'}} cn={{size: 'text-body-1'}} className="text-red-500 !font-bold"/>
					<Text data={{text: '+15', tag: 'span'}} cn={{size: 'text-body-1'}} className="text-green-500 !font-bold"/>
				</div>
				<div className="flex flex-col gap-8 items-center w-[14rem] mx-auto mt-10">
					<Button data-success="false" className="!w-full" onClick={buttonClick}><Text
						data={{text: '1800г', tag: 'p'}}/></Button>
					<Button data-success="false" className="!w-full" onClick={buttonClick}><Text
						data={{text: '1825г', tag: 'p'}}/></Button>
					<Button data-success="true" className="!w-full" onClick={buttonClick}><Text data={{text: '1799г', tag: 'p'}}/></Button>
				</div>
			</SectionWhite>}
			{current === 2 && <SectionWhite overflow="overflow-visible" className="mt-10 relative">
				<Heading data={{text: 'Как называется документ, в котором фиксируются доходы и расходы?', tag: 'h3'}} cn={{align: 'text-center'}}/>
				<div className="flex absolute left-8 right-8 top-8 justify-between">
					<Text data={{text: '-15', tag: 'span'}} cn={{size: 'text-body-1'}} className="text-red-500 !font-bold"/>
					<Text data={{text: '+15', tag: 'span'}} cn={{size: 'text-body-1'}} className="text-green-500 !font-bold"/>
				</div>
				<div className="flex flex-col gap-8 items-center w-[14rem] mx-auto mt-10">
					<Button data-success="false" className="!w-full" onClick={buttonClick}>
						<Text data={{text: 'Баланс', tag: 'p'}}/>
					</Button>
					<Button data-success="true" className="!w-full" onClick={buttonClick}>
						<Text data={{text: 'Бюджет', tag: 'p'}}/>
					</Button>
					<Button data-success="false" className="!w-full" onClick={buttonClick}>
						<Text data={{text: 'Счет', tag: 'p'}}/>
					</Button>
				</div>
			</SectionWhite>}
			<div className="flex mt-10">
				<Button onClick={() => {
					setCurrent(2);
					setShow(false)
				}}
				        className="ml-auto"
				>
					Следующий вопрос
				</Button>
			</div>
			<CoinsTotal cn={{margin: 'my-[40px]'}} value={value}/>
			{show && <CardAnswers
				textData={{text: 'Александр Сергеевич Пушкин — русский поэт, драматург и прозаик. Родился: 6 июня 1799 года, Москва, Российская империя'}}
			>
				<Heading data={{text: 'Правильный ответ ', tag: 'h4'}} cn={{margin: 'mb-2'}}/>
			</CardAnswers>}
		</div>
	);
};

export default Earnings;
