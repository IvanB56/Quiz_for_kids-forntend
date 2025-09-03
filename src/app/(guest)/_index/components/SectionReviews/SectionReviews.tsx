'use client';
import React from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {reviews} from "@assets/mock/reviews";
import {Heading, Slider, Text} from "@components";

import './SectionReviews.scss';

const block = CN('reviews');

export const SectionReviews = () => {
	return (
		<section className={block()}>
			<div className={block('title')}>
				<Heading data={{text: 'Специалисты о монетикум', tag: 'h2'}} cn={{size: 'h2', align: 'text-center'}}/>
				<Text data={{
					text: 'Уже на стадии разработки монетикум получил высокие отзывы со стороны психологов, воспитателей, родителей ',
					tag: 'p'
				}} className="text text-center"/>
			</div>
			<div className={block('body')}>
				<Slider settings={{
					slidesPerView: 1.25,
					spaceBetween: '20px',
					pagination: {
						enabled: true,
						clickable: true,
						el: `.${block('pagination')}`,
						renderBullet(index, className) {
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