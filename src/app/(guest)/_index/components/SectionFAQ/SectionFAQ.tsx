import React from 'react';
import {CN} from "@/lib";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, Heading, Text, WhiteCard,} from "@components";

import './SectionFAQ.scss';

const block = CN('faq');

export const SectionFaq = () => {
	return (
		<section className={block()}>
			<div className="container">
				<WhiteCard>
					<Heading
						data={{text: 'Часто задаваемые вопросы', tag: 'h2'}}
						cn={{size: 'h2', align: 'text-center'}}
						className={block('heading')}
					/>
				</WhiteCard>
				<Accordion type="multiple" className={block('accordion')} defaultValue={["item-1"]}>
					<AccordionItem value="item-1" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{text: 'Это должно нравится моему ребенку', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}><Text data={{text: 'weafsdfasfd', tag: 'p'}}
						                                                               className="text"/></AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}><Text
							data={{text: 'Хочу пробную версию', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/></AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{
								text: 'Если мы будем учить ребенка на всем зарабатывать деньги, тогда он перестанет что либо делать бесплатно',
								tag: 'p'
							}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{
								text: 'Обучающее приложение не должно быть с элементами игры/игровыми персонажами, зачем это нужно',
								tag: 'p'
							}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}><Text
							data={{text: 'Если ребенок начнет и бросит', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/></AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{text: 'Если не понравится вернут ли деньги', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-7" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{text: 'Почему приложение нужно использовать постоянно', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-8" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}>
							<Text data={{text: 'Могу ли я отказаться от части функций', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/>
						</AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-9" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}><Text
							data={{text: 'Есть какие нибудь аналоги', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/></AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-10" className={block('accordion-item')}>
						<AccordionTrigger className={block('accordion-trigger')}><Text
							data={{text: 'Можно ли для детей младше 7 лет', tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/></AccordionTrigger>
						<AccordionContent className={block('accordion-content')}>
							<Text data={{
								text: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
								tag: 'p'
							}} className="text"/>
							<Text data={{
								text: 'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
								tag: 'p'
							}} className="text"/>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
};