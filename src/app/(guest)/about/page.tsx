import React from 'react';
import { Heading } from '@components';
import { AboutBlock } from '@/widgets/AboutBlock/aboutBlock';
import { texts } from './texts';
import image_1 from '@assets/images/about/block-1.png';
import image_2 from '@assets/images/about/block-2.png';
import image_3 from '@assets/images/about/block-3.png';
import image_4 from '@assets/images/about/block-4.png';
import image_5 from '@assets/images/about/block-5.png';

const About = () => {
	const images = [image_1.src, image_2.src, image_3.src, image_4.src, image_5.src];
	return (
		<main>
			<div className={'container'}>
				<Heading data={{ tag: 'h1', text: 'О нас' }} cn={{ size: 'h2' }} className={'text-center uppercase my-10'} />
			</div>
			{texts &&
				texts.map((text, index) => {
					return (
						<AboutBlock
							data={{ text, image: images[index] }}
							cn={{ direction: index % 2 ? 'reverse' : undefined, padding: index ? 'py-24 max-lg:py-6' : '' }}
							key={index}
						/>
					);
				})}
		</main>
	);
};

export default About;
