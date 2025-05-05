'use client';
import React from 'react';
import {Swiper, SwiperSlide,} from 'swiper/react';
import {ISlider} from "./Slider.cn";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.scss';

const Slider = (props: ISlider) => {
	const {settings, children} = props;

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			{...settings}
			spaceBetween={settings.spaceBetween}
			slidesPerView={settings.slidesPerView}
			navigation={settings.navigation || false}
			pagination={settings.pagination || false}
		>
			{
				children
			}
		</Swiper>
	);
};

Slider.Slide = SwiperSlide;
// Slider.Navigation = Navigation;
// Slider.Pagination = Pagination;
export {Slider}
