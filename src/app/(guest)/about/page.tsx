import React from 'react';
import { Heading } from '@components';
import { AboutBlock } from '@/widgets/AboutBlock/aboutBlock';
import { texts } from './texts';
import image_1 from '@assets/images/about/block-1.png';

const About = () => {
	return (
		<main>
			<div className={'container'}>
				<Heading data={{ tag: 'h1', text: 'О нас' }} cn={{ size: 'h2' }} className={'text-center uppercase my-10'} />
			</div>
			<AboutBlock data={{ text: texts[0], image: image_1.src }} />
		</main>
	);
};

export default About;
