'use client';
import React from 'react';
import { Heading, Slider } from '@components';
import { CardQuiz } from './componetns/CardQuiz';
import { classes } from './cn/SliderQuiz.cn';
import { SliderQuizController } from './controllers/SliderQuiz.controller';
import { ISliderQuiz } from '@/widgets/SliderQuiz/types/SliderQuiz.type';

export const SliderQuiz = (props: ISliderQuiz) => {
	const styles = classes(props.cn);
	const { cards } = SliderQuizController();

	return (
		<section className={styles.block}>
			<div className="container">
				<Heading data={{ text: 'Популярные викторины', tag: 'h2' }} cn={{ margin: 'mb-8' }} />
				<Slider settings={{
					slidesPerView: 1.2,
					spaceBetween: '0',
					breakpoints: {
						768: {
							slidesPerView: 1.8,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: '10px',
						},
					},
				}}>
					{cards.map((card, idx) => (
						<Slider.Slide key={idx} className="p-5 md:p-7">
							<CardQuiz data={card} />
						</Slider.Slide>
					))}
					{/*<Slider.Navigation></Slider.Navigation>*/}
				</Slider>
			</div>
		</section>
	);
};
