import {SwiperOptions} from 'swiper/types';
import {IChildrenAndClassName} from "@root/global";

export interface ISlider extends IChildrenAndClassName {
	data?: never;
	settings: SwiperOptions;
	className?: string;
}
