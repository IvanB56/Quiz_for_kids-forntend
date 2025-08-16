import React from 'react';
import {Playfair_Display, Roboto} from 'next/font/google';
import {BannerAnimate} from "@widgets";
import {useClassName} from "@hooks";
import './index-page.scss';
import {SectionServices} from "@/app/(guest)/_index/components/SectionServices/SectionServices";

const robotoFont = Roboto({
	weight: ['300', '400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-roboto',
});

const playFairDisplayFont = Playfair_Display({
	weight: ['400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-play-fair'
});

export const IndexPage = () => {
	return (
		<div className={useClassName('index-page', robotoFont.variable, playFairDisplayFont.variable)}>
			<BannerAnimate/>
			<SectionServices />
		</div>
	);
};