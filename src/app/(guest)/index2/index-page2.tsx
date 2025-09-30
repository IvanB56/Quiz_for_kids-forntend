import React from 'react';
import { Fuzzy_Bubbles, Geist, Playfair_Display, Roboto } from 'next/font/google';
import {BannerAnimate} from "@widgets";
import {useClassName} from "@hooks";
import './index-page2.scss';
import { SectionSubscription } from '@/app/(guest)/index2/components/SectionSubscription/SectionSubscription';
import { SectionReviews } from '@/app/(guest)/index2/components/SectionReviews/SectionReviews';
import { SectionFaq } from '@/app/(guest)/index2/components/SectionFAQ/SectionFAQ';
import { SectionMakeMoney } from '@/app/(guest)/index2/components/SectionMakeMoney/SectionMakeMoney';
import { SectionSubscriptionInstant } from '@/app/(guest)/index2/components/SectionSubscriptionInstant/SectionSubscriptionInstant';
import { SectionSliderSolutions } from '@/app/(guest)/index2/components/SectionSliderSolutions/SectionSliderSolutions';
import { BannerStatic } from '@/app/(guest)/index2/components/BannerStatic/BannerStatic';
import { SectionSimulator } from '@/app/(guest)/index2/components/SectionSimulator/SectionSimulator';
import { SectionVideo } from '@/app/(guest)/index2/components/SectionVideo/SectionVideo';
import { SectionEarnings } from '@/app/(guest)/index2/components/SectionEarnings/SectionEarnings';
import { SectionHowWorks } from '@/app/(guest)/index2/components/SectionHowWorks/SectionHowWorks';
import { SectionSliderMobile } from '@/app/(guest)/index2/components/SectionSliderMobile/SectionSliderMobile';

const robotoFont = Roboto({
	weight: ['300', '400', '500'],
	subsets: ['cyrillic'],
	variable: '--font-roboto',
});

const geistFont = Geist({
	weight: ['400', '500'],
	subsets: ['latin'],
	variable: '--font-geist',
})

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

export const IndexPage2 = () => {
	return (
		<div
			className={useClassName('index-page2', robotoFont.variable, geistFont.variable, playFairDisplayFont.variable, fuzzyBubbles.variable)}>
			<BannerStatic/>
			<SectionSimulator/>
			<SectionVideo/>
			<SectionEarnings/>
			<SectionHowWorks/>
			<SectionSliderSolutions/>
			<SectionSubscription/>
			<SectionSliderMobile/>
			<SectionSubscription/>
			<SectionReviews/>
			<SectionFaq/>
			<SectionMakeMoney/>
			<SectionSubscriptionInstant/>
		</div>
	);
};
