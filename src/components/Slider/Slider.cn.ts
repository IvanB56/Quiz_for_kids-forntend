import {SwiperOptions} from 'swiper/types';
import {IChildrenAndClassName} from "@root/global";
import {Ref} from "react";
import {SwiperRef} from "swiper/react";

export interface ISlider extends IChildrenAndClassName {
	data?: never;
	settings: SwiperOptions;
	className?: string;
	ref?: Ref<SwiperRef>
}
