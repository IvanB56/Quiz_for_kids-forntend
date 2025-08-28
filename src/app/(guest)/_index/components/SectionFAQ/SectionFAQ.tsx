import React from 'react';
import {CN} from "@/lib";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, Heading, Text,} from "@components";
import {faq} from '@assets/mock';

import './SectionFAQ.scss';

const block = CN('faq');

export const SectionFaq = () => {
	return (
		<section className={block()}>
			<div className="container">
					<Heading
						data={{text: 'Часто задаваемые вопросы', tag: 'h2'}}
						cn={{size: 'h2', align: 'text-center'}}
						className={block('heading')}
					/>
				<Accordion type="multiple" className={block('accordion')} defaultValue={["item-0"]}>
					{
						faq?.map(({title, text}, index) => (
							<AccordionItem value={`item-${index}`} className={block('accordion-item')} key={index}>
								<AccordionTrigger className={block('accordion-trigger')}>
									<Text data={{text: title, tag: 'p'}} cn={{weight: 'font-semibold'}} className="text"/>
								</AccordionTrigger>
								<AccordionContent className={block('accordion-content')}>
									<Text data={{text, tag: 'p'}} className="text"/>
								</AccordionContent>
							</AccordionItem>
						))
					}
				</Accordion>
			</div>
		</section>
	);
};