import { EmptyBlock, Greetings, PopularCategory, SliderQuiz } from '@widgets';
import React from 'react';
import ImageLeft from '@assets/images/empty-block/image-left.png';
import ImageRight from '@assets/images/empty-block/image-right.png';

const IndexPage = () => {
	return (
		<>
			<Greetings cn={{ background: 'bg-section-grey', padding: 'py-[100px] max-md:py-[40px]' }} />
			<PopularCategory cn={{ padding: 'py-[100px] max-md:py-[40px]' }} />
			<SliderQuiz cn={{ background: 'bg-section-grey', padding: 'py-[100px] max-md:py-[40px]' }} />
			<EmptyBlock imagePosition={'left'} image={ImageLeft} />
			<EmptyBlock imagePosition={'right'} image={ImageRight} isBgGrey={true} />
		</>
	);
};
export default IndexPage;
