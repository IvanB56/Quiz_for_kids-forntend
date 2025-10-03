import React from 'react';
import {CN} from "@/lib";
import { Heading, Text } from '@components';

import './SectionVideo.scss';

const block = CN('video');

export const SectionVideo = () => {
	const dataVideo = {
		video: [
			{
				src: '/video/index2/sila-vetra-1.mp4',
				text: 'Название видео'
			},
			{
				src: '/video/index2/sila-vetra-2.mp4',
				text: 'Название видео'
			},
			{
				src: '/video/index2/sila-vetra-3.mp4',
				text: 'Название видео'
			},
			{
				src: '/video/index2/sila-vetra-1.mp4',
				text: 'Название видео'
			},
			{
				src: '/video/index2/sila-vetra-2.mp4',
				text: 'Название видео'
			},
			{
				src: '/video/index2/sila-vetra-3.mp4',
				text: 'Название видео'
			},
		]
	}

	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<div className={block('right-part')}>
					<div className={block('container-video')}>
						<video className={block('video-main')} src='/video/index2/sila-vetra-1.mp4'></video>
						<div className={block('video-button-play')}></div>
					</div>
					<Heading data={{text: 'Привет родители!', tag: 'h3'}} cn={{size: 'h3', margin: 'mb-7 sm:mb-4'}} className={block('heading')}/>
					<div className={block('wrapper-description')}>
						<Text data={{text: 'Знакомство с проектом', tag: 'p'}} className={block('description')} />
					</div>
				</div>
				<div className={block('left-part')}>
					{dataVideo.video.map((item, idx) => (
						<div className={block('wrapper-video')} key={idx}>
							<div className={block('container-video')}>
								<video className={block('video')} src={item.src}></video>
								<div className={block('video-button-play-small')}></div>
							</div>
							<Text data={{text: item.text, tag: 'p'}} className={block('video-text')} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
