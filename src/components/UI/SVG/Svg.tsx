import React from 'react';
import {IChildrenAndClassName} from "@root/global";

interface ISvg extends IChildrenAndClassName {
	name: string;
}

export const Svg = (props: ISvg) => {
	const {className, name} = props;

	switch (name) {
		case 'star':
			return (
				<svg className={className} width="20" height="18" viewBox="0 0 20 18" fill="none"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.09062 1.65103C9.40581 0.764237 10.6599 0.764235 10.9751 1.65103L12.498 5.93572C12.6397 6.33445 13.0171 6.60081 13.4403 6.60081H18.1637C19.154 6.60081 19.5419 7.88592 18.717 8.43382L15.0546 10.8663C14.6723 11.1202 14.5119 11.6018 14.6656 12.0342L16.1001 16.0701C16.422 16.9759 15.4053 17.7699 14.6046 17.2381L10.5861 14.5691C10.2509 14.3464 9.81485 14.3464 9.4796 14.5691L5.46117 17.2381C4.66043 17.7699 3.64372 16.9759 3.96565 16.0701L5.40013 12.0342C5.55384 11.6018 5.39345 11.1202 5.01115 10.8663L1.34874 8.43382C0.523815 7.88592 0.911705 6.60081 1.902 6.60081H6.62546C7.04864 6.60081 7.42599 6.33445 7.56772 5.93572L9.09062 1.65103Z"
						fill="currentColor"
					/>
				</svg>
			)
		case 'favorite':
			return (
				<svg className={className} width="20" height="22" viewBox="0 0 20 22" fill="none"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.66021 17.2547C9.95593 17.0957 10.3117 17.0957 10.6074 17.2547L17.9583 21.2076C18.6245 21.5658 19.4319 21.0833 19.4319 20.3268V1C19.4319 0.447716 18.9842 0 18.4319 0H1.83569C1.28341 0 0.835693 0.447715 0.835693 1V20.3268C0.835693 21.0833 1.64309 21.5658 2.3093 21.2076L9.66021 17.2547Z"
						fill="currentColor"
					/>
				</svg>
			)
		default:
			return null;
	}
};
