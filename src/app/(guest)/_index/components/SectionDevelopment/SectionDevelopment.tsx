'use client';
import React, {useMemo} from 'react';
import {CN} from "@/lib";
import {Heading, Slider, Text} from "@components";
import './SectionDevelopment.scss';
import {developments} from "@assets/mock";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useClassName} from "@hooks";

const block = CN('development');

export const SectionDevelopment = () => {
	const developmentsGroupSlider = useMemo(() => {
		const groupItems: Array<string> = [];

		return [...developments].reduce<Array<typeof groupItems>>((acc, item, index, arr) => {
			groupItems.push(item);

			if (index && ((index + 1) % 5 === 0 || index === arr.length - 1)) {
				acc.push([...groupItems]);
				groupItems.length = 0;
			}

			return acc;
		}, []);
	}, []);

	return (
		<section className={block()}>
			<Heading data={{text: 'Развитие по 13 топовым направлениям ', tag: 'h2'}}
			         cn={{size: 'h2', align: 'text-center'}}/>
			<div className="container">
				<div className={block('directions')}>
					<Slider settings={{
						slidesPerView: 1,
						spaceBetween: '20px',
						enabled: true,
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
								enabled: false,
								slidesPerView: 'auto',
								spaceBetween: 0,
							}
						}
					}}>
						{
							developmentsGroupSlider.map((development, index) => {
								return (
									<Slider.Slide className={block('slide')} key={index}>
										{
											development.map(item => (
												<div key={item} className={block('list-item')}>
													<img src={"images/index-new/svg/check-mark.svg"} width={50} alt="check"/>
													<Text data={{text: item, tag: 'p'}} className={'text'}/>
												</div>
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
			</div>
		</section>
	);
};