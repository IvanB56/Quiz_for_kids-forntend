import React from 'react';
import {Fuzzy_Bubbles, Playfair_Display, Roboto} from 'next/font/google';
import {BannerAnimate} from "@widgets";
import {useClassName} from "@hooks";
import {Assistant} from '@components';
import {SectionServices} from "./components/SectionServices/SectionServices";
import {SectionDevelopment} from "./components/SectionDevelopment/SectionDevelopment";
import {SectionAdvantages} from "./components/SectionAdvantages/SectionAdvantages";
import {SectionIdeas} from "./components/SectionIdeas/SectionIdeas";
import SectionReviews from "./components/SectionReviews/SectionReviews";
import {SectionChildFunction} from "./components/SectionChildFunction/SectionChildFunction";
import {SectionParentFunction} from "./components/SectionParentFunction/SectionParentFunction";
import './index-page.scss';
import {SectionChildInterest} from "@/app/(guest)/_index/components/SectionChildInterest/SectionChildInterest";
import {SectionPossibilities} from "@/app/(guest)/_index/components/SectionPossibilities/SectionPossibilities";

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
			<SectionParentFunction />
			<SectionChildInterest />
			<SectionPossibilities />
		</div>
	);
};