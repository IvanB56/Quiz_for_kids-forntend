'use client';
import React, {useMemo} from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {services} from "@assets/mock";
import {Heading, Slider, Text, WhiteCard} from "@components";

import './SectionServices.scss';

const block = CN('services');

export const SectionServices = () => {
	const servicesGroupSlider = useMemo(() => {
		const groupItems: Array<{ icon: string; text: string }> = [];

		return [...services].reduce<Array<typeof groupItems>>((acc, item, index, arr) => {
			groupItems.push(item);

			if (index && ((index + 1) % 4 === 0 || index === arr.length - 1)) {
				acc.push([...groupItems]);
				groupItems.length = 0;
			}

			return acc;
		}, [])
	}, []);

	return (
		<section className={useClassName(block(), 'container')}>
			<Heading data={{text: 'Развивающе-мотивационная платформа ', tag: 'h1'}} cn={{size: 'h1', align: 'text-center'}}/>
			<Text
				data={{text: 'для ребенка<br /> и уникальные сервисы для родителей', tag: 'p'}}
				className={'subtitle'}
			/>
			<div className={block('body')}>
				<Slider settings={{
					slidesPerView: 1,
					spaceBetween: '20px',
					enabled: true,
					pagination: {
						enabled: true,
						clickable: true,
						el: `.${block('pagination')}`,
						renderBullet(_, className) {
							return `<span class="${className} pagination-bullet"></span>`;
						}
					},
					navigation: {
						prevEl: `.${block('navigation-prev')}`,
						nextEl: `.${block('navigation-next')}`,
					},
					breakpoints: {
						991: {
							enabled: false,
							slidesPerView: 'auto',
							spaceBetween: 0,
						}
					}
				}}>
					{
						servicesGroupSlider.map((service, index) => {
							return (
								<Slider.Slide className={block('slide')} key={index}>
									{
										service.map(item => (
											<WhiteCard className={block('card')} key={`${index}.${item.text}`}>
												<img src={`images/index-new/gif/${item.icon}.gif`} alt="" className={block('image')}/>
												<Text data={{text: item.text, tag: 'p'}} className={"text"}/>
											</WhiteCard>
										))
									}
								</Slider.Slide>
							)
						})
					}
				</Slider>
				<div className="slider-controls">
					<div className={useClassName('navigation-prev', block('navigation-prev'))}>
						<ArrowLeft />
					</div>
					<div className={useClassName("pagination", block('pagination'))}></div>
					<div className={useClassName('navigation-prev', block('navigation-next'))}>
						<ArrowRight />
					</div>
				</div>
			</div>
		</section>
	);
};