'use client';
import React, { useState, useRef, useEffect } from 'react';
import {CN} from "@/lib";
import { Heading, Text } from '@components';

import './SectionVideo.scss';

const block = CN('video');

export const SectionVideo = () => {
	const mainVideoRef = useRef<HTMLVideoElement>(null);
	const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);
	const [isMainVideoPlaying, setIsMainVideoPlaying] = useState(false);
	const [isSmallVideoPlaying, setIsSmallVideoPlaying] = useState<boolean[]>(new Array(6).fill(false));
	const [currentMainVideoIndex, setCurrentMainVideoIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	// Определяем мобильное устройство
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);

		return () => window.removeEventListener('resize', checkIsMobile);
	}, []);

	const setMainVideoRef = (el: HTMLVideoElement | null) => {
		mainVideoRef.current = el;
		if (el) {
			el.addEventListener('ended', () => {
				setIsMainVideoPlaying(false);
			});
			el.addEventListener('pause', () => {
				setIsMainVideoPlaying(false);
			});
			el.addEventListener('play', () => {
				setIsMainVideoPlaying(true);
			});
		}
	};

	const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(6).fill(null));

	const initializeVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
		videoRefs.current[index] = el;
		if (el) {
			el.addEventListener('ended', () => {
				setIsSmallVideoPlaying(prev => {
					const newState = [...prev];
					newState[index] = false;
					return newState;
				});
				setPlayingVideoIndex(null);
			});
			el.addEventListener('pause', () => {
				setIsSmallVideoPlaying(prev => {
					const newState = [...prev];
					newState[index] = false;
					return newState;
				});
				setPlayingVideoIndex(null);
			});
			el.addEventListener('play', () => {
				setIsSmallVideoPlaying(prev => {
					const newState = [...prev];
					newState[index] = true;
					return newState;
				});
				setPlayingVideoIndex(index);
			});
		}
	};

	const handlePlayVideo = (videoRef: React.RefObject<HTMLVideoElement | null>, index?: number) => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
				setIsMainVideoPlaying(true);
				if (index !== undefined) {
					setPlayingVideoIndex(index);
				}
			} else {
				videoRef.current.pause();
				setIsMainVideoPlaying(false);
				if (index !== undefined) {
					setPlayingVideoIndex(null);
				}
			}
		}
	};

	const replaceMainVideo = (index: number) => {
		if (!isMobile && mainVideoRef.current) {
			setCurrentMainVideoIndex(index);
			setIsMainVideoPlaying(false);
		}
	};

	const handlePlaySmallVideo = (index: number) => {
		if (!isMobile) {
			replaceMainVideo(index);
			return;
		}

		const video = videoRefs.current[index];
		if (video) {
			if (video.paused) {
				video.play();
				setPlayingVideoIndex(index);
				setIsSmallVideoPlaying(prev => {
					const newState = [...prev];
					newState[index] = true;
					return newState;
				});
			} else {
				video.pause();
				setPlayingVideoIndex(null);
				setIsSmallVideoPlaying(prev => {
					const newState = [...prev];
					newState[index] = false;
					return newState;
				});
			}
		}
	};

	const handleVideoClick = (index: number) => {
		if (!isMobile) {
			replaceMainVideo(index);
		}
	};

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
						<video
							ref={setMainVideoRef}
							className={block('video-main')}
							src={dataVideo.video[currentMainVideoIndex].src}
							controls={isMainVideoPlaying}
						></video>
						{!isMainVideoPlaying && (
							<div
								className={block('video-button-play')}
								onClick={() => handlePlayVideo(mainVideoRef)}
							></div>
						)}
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
								<video
									ref={initializeVideoRef(idx)}
									className={block('video')}
									src={item.src}
									controls={isSmallVideoPlaying[idx]}
									onClick={() => handleVideoClick(idx)}
								></video>
								{!isSmallVideoPlaying[idx] && (
									<div
										className={block('video-button-play-small')}
										onClick={() => handlePlaySmallVideo(idx)}
									></div>
								)}
							</div>
							<Text data={{text: item.text, tag: 'p'}} className={block('video-text')} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
