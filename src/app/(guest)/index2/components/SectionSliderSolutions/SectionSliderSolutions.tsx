'use client';
import React from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {reviews} from "@assets/mock/reviews";
import {Heading, Slider, Text} from "@components";

import './SectionSliderSolutions.scss';

const block = CN('slider-solutions');

export const SectionSliderSolutions = () => {
	return (
		<section className={block()}>
			<Heading data={{text: 'МОНЕТИКУМ – 10 ГОТОВЫХ РЕШЕНИЙ', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}}/>
			<div className={block('body')}>
				<Slider settings={{
					slidesPerView: 1.25,
					spaceBetween: '20px',
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
							slidesPerView: 2,
							spaceBetween: '60px',
							pagination: false
						},
						768: {
							slidesPerView: 1.75
						}
					}
				}}>
					{
						reviews.map(item => (
							<Slider.Slide key={item.id} className={block('card')}>
								<img src={item.image} alt={item.position} className={block('image')}/>
								<div>
									<Text
										data={{text: `${item.name} - ${item.position}, ${item.experience}, ${item.region}`, tag: 'span'}}
										cn={{size: 'text-body-1'}}/>
								</div>
								<Text data={{text: item.text, tag: 'p'}} cn={{margin: 'mt-3'}} className="text"/>
							</Slider.Slide>
						))
					}
				</Slider>
				<div className={useClassName(block('slider-controls'), 'slider-controls')}>
					<div className={useClassName('navigation-prev', block('navigation-prev'))}>
						<ArrowLeft/>
					</div>
					<div className={useClassName("pagination", block('pagination'))}></div>
					<div className={useClassName('navigation-prev', block('navigation-next'))}>
						<ArrowRight/>
					</div>
				</div>
			</div>

			<Heading data={{text: 'В ПОМОЩЬ РОДИТЕЛЯМ', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}}/>
			<div className={block('body')}>
				<Slider settings={{
					slidesPerView: 1.25,
					spaceBetween: '20px',
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
							slidesPerView: 2,
							spaceBetween: '60px',
							pagination: false
						},
						768: {
							slidesPerView: 1.75
						}
					}
				}}>
					{
						reviews.map(item => (
							<Slider.Slide key={item.id} className={block('card')}>
								<img src={item.image} alt={item.position} className={block('image')}/>
								<div>
									<Text
										data={{text: `${item.name} - ${item.position}, ${item.experience}, ${item.region}`, tag: 'span'}}
										cn={{size: 'text-body-1'}}/>
								</div>
								<Text data={{text: item.text, tag: 'p'}} cn={{margin: 'mt-3'}} className="text"/>
							</Slider.Slide>
						))
					}
				</Slider>
				<div className={useClassName(block('slider-controls'), 'slider-controls')}>
					<div className={useClassName('navigation-prev', block('navigation-prev'))}>
						<ArrowLeft/>
					</div>
					<div className={useClassName("pagination", block('pagination'))}></div>
					<div className={useClassName('navigation-prev', block('navigation-next'))}>
						<ArrowRight/>
					</div>
				</div>
			</div>
		</section>
	);
};
