import React from 'react';
import {Fuzzy_Bubbles, Playfair_Display, Roboto} from 'next/font/google';
import {BannerAnimate} from "@widgets";
import {useClassName} from "@hooks";
import {SectionServices} from "./components/SectionServices/SectionServices";
import {SectionDevelopment} from "./components/SectionDevelopment/SectionDevelopment";
import {SectionAdvantages} from "./components/SectionAdvantages/SectionAdvantages";
import {Assistant} from '@components';
import './index-page.scss';
import {SectionIdeas} from "@/app/(guest)/_index/components/SectionIdeas/SectionIdeas";
import SectionReviews from "@/app/(guest)/_index/components/SectionReviews/SectionReviews";
import {SectionChildFunction} from "@/app/(guest)/_index/components/SectionChildFunction/SectionChildFunction";

const robotoFont = Roboto({
	weight: ['300', '400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-roboto',
});

const fuzzyBubbles = Fuzzy_Bubbles({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-fuzzy',
});

const playFairDisplayFont = Playfair_Display({
	weight: ['400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-play-fair'
});

export const IndexPage = () => {
	return (
		<div className={useClassName('index-page', robotoFont.variable, playFairDisplayFont.variable, fuzzyBubbles.variable)}>
			<BannerAnimate/>
			<SectionServices />
			<Assistant />
			<SectionDevelopment />
			<SectionAdvantages />
			<SectionIdeas />
			<SectionReviews />
			<SectionChildFunction />
		</div>
	);
};