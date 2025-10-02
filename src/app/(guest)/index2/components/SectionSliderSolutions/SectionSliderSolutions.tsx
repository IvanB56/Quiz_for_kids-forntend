'use client';
import React from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";
import {solutions, solutions1} from "./solutions";
import {Heading, Slider, Text} from "@components";

import './SectionSliderSolutions.scss';
import Image from 'next/image';

const block = CN('slider-solutions');

export const SectionSliderSolutions = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading className={block('heading')} data={{text: 'МОНЕТИКУМ – 10 ГОТОВЫХ РЕШЕНИЙ', tag: 'h3'}} cn={{size: 'h3', color: 'text-brown', align: 'text-center', margin: 'mb-5 sm:mb-14'}}/>
				<div className={block('body')}>
					<Slider settings={{
						slidesPerView: 1,
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
							1440: {
								slidesPerView: 3,
								spaceBetween: '25px',
								// pagination: false
							},
							991: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 1.75
							}
						}
					}}>
						{
							solutions.map(item => (
								<Slider.Slide key={item.id} className={block('card')}>
									<img src={item.image} alt='' className={block('image')}/>
									<div className={block('wrapper-text')}>
										<Text
											data={{text: `${item.name}`, tag: 'span'}}
											cn={{size: 'text-body-1', color: 'text-brown'}}/>
										<Text data={{text: item.text, tag: 'p'}} cn={{color: 'text-brown'}} className="text"/>
									</div>
								</Slider.Slide>
							))
						}
					</Slider>
					<div className={useClassName(block('slider-controls'), 'slider-controls')}>
						<div className={useClassName('navigation-prev', block('navigation-prev'))}>
							<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_i_2955_208)">
									<path d="M24 10.5C24.8284 10.5 25.5 11.1716 25.5 12C25.5 12.8284 24.8284 13.5 24 13.5L24 12L24 10.5ZM0.939341 13.0607C0.353554 12.4749 0.353554 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807613 12.0208 0.807613 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939341 13.0607ZM24 12L24 13.5L2 13.5L2 12L2 10.5L24 10.5L24 12Z" fill="#FFF4EC"/>
								</g>
								<defs>
									<filter id="filter0_i_2955_208" x="0.5" y="0.954102" width="25" height="26.0918" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dy="4"/>
										<feGaussianBlur stdDeviation="2"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2955_208"/>
									</filter>
								</defs>
							</svg>
						</div>
						<div className={useClassName("pagination", block('pagination'))}></div>
						<div className={useClassName('navigation-prev', block('navigation-next'))}>
							<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_i_2955_242)">
									<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 12L2 10.5ZM25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807613 13.9792 0.807613 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM2 12L2 13.5L24 13.5L24 12L24 10.5L2 10.5L2 12Z" fill="#FFF4EC"/>
								</g>
								<defs>
									<filter id="filter0_i_2955_242" x="0.5" y="0.954102" width="25" height="26.0918" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dy="4"/>
										<feGaussianBlur stdDeviation="2"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2955_242"/>
									</filter>
								</defs>
							</svg>
						</div>
					</div>
				</div>

				<Heading className={block('heading')} data={{text: 'В ПОМОЩЬ РОДИТЕЛЯМ', tag: 'h3'}} cn={{size: 'h3', color: 'text-brown', align: 'text-center', margin: 'mb-5 sm:mb-14 mt-5 sm:mt-14'}}/>
				<div className={block('body')}>
					<Slider settings={{
						slidesPerView: 1,
						spaceBetween: '20px',
						pagination: {
							enabled: true,
							clickable: true,
							el: `.${block('pagination-second')}`,
							renderBullet(_, className) {
								return `<span class="${className} pagination-bullet"></span>`;
							}
						},
						navigation: {
							prevEl: `.${block('navigation-prev-second')}`,
							nextEl: `.${block('navigation-next-second')}`,
						},
						breakpoints: {
							1440: {
								slidesPerView: 3,
								spaceBetween: '25px',
								// pagination: false
							},
							991: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 1.75
							}
						}
					}}>
						{
							solutions1.map(item => (
								<Slider.Slide key={item.id} className={block('card')}>
									<img src={item.image} alt='' className={block('image')}/>
									<div className={block('wrapper-text')}>
										<Text
											data={{text: `${item.name}`, tag: 'span'}}
											cn={{size: 'text-body-1', color: 'text-brown'}}/>
										<Text data={{text: item.text, tag: 'p'}} cn={{color: 'text-brown'}} className="text"/>
									</div>
								</Slider.Slide>
							))
						}
					</Slider>
					<div className={useClassName(block('slider-controls-second'), 'slider-controls-second')}>
						<div className={block('navigation-prev-second')}>
							<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_i_2955_208)">
									<path d="M24 10.5C24.8284 10.5 25.5 11.1716 25.5 12C25.5 12.8284 24.8284 13.5 24 13.5L24 12L24 10.5ZM0.939341 13.0607C0.353554 12.4749 0.353554 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807613 12.0208 0.807613 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939341 13.0607ZM24 12L24 13.5L2 13.5L2 12L2 10.5L24 10.5L24 12Z" fill="#FFF4EC"/>
								</g>
								<defs>
									<filter id="filter0_i_2955_208" x="0.5" y="0.954102" width="25" height="26.0918" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dy="4"/>
										<feGaussianBlur stdDeviation="2"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2955_208"/>
									</filter>
								</defs>
							</svg>
						</div>
						<div className={useClassName('pagination', block('pagination-second'))}></div>
						<div className={block('navigation-next-second')}>
							<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_i_2955_242)">
									<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 12L2 10.5ZM25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807613 13.9792 0.807613 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM2 12L2 13.5L24 13.5L24 12L24 10.5L2 10.5L2 12Z" fill="#FFF4EC"/>
								</g>
								<defs>
									<filter id="filter0_i_2955_242" x="0.5" y="0.954102" width="25" height="26.0918" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dy="4"/>
										<feGaussianBlur stdDeviation="2"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2955_242"/>
									</filter>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<Image src={"/images/index2/bg-gradient-slider-solutions.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
