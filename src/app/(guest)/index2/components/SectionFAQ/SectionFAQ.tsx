import React from 'react';
import {CN} from "@/lib";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, Heading, Text,} from "@components";
import {faq} from '@assets/mock/index2';

import './SectionFAQ.scss';
import Image from 'next/image';

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
									<Text data={{text: title, tag: 'p'}} className="text text-title"/>
									<svg className={block('svg-arrow')} width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_i_2909_324)">
											<path d="M21.5 3C21.5 1.61929 20.3807 0.5 19 0.5C17.6193 0.5 16.5 1.61929 16.5 3L19 3L21.5 3ZM17.2322 34.7678C18.2085 35.7441 19.7915 35.7441 20.7678 34.7678L36.6777 18.8579C37.654 17.8816 37.654 16.2986 36.6777 15.3223C35.7014 14.346 34.1184 14.346 33.1421 15.3223L19 29.4645L4.85786 15.3223C3.88155 14.346 2.29864 14.346 1.32233 15.3223C0.346019 16.2986 0.346019 17.8816 1.32233 18.8579L17.2322 34.7678ZM19 3L16.5 3L16.5 33L19 33L21.5 33L21.5 3L19 3Z" fill="#FFF2E5"/>
										</g>
										<defs>
											<filter id="filter0_i_2909_324" x="0.589844" y="0.5" width="36.8203" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
												<feFlood floodOpacity="0" result="BackgroundImageFix"/>
												<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
												<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
												<feOffset dy="4"/>
												<feGaussianBlur stdDeviation="2"/>
												<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
												<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
												<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2909_324"/>
											</filter>
										</defs>
									</svg>
								</AccordionTrigger>
								<AccordionContent className={block('accordion-content')}>
									<Text data={{text, tag: 'p'}} cn={{weight: 'font-normal'}} className="text"/>
								</AccordionContent>
							</AccordionItem>
						))
					}
				</Accordion>
			</div>
			<Image src={"/images/index2/bg-gradient-faq.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
