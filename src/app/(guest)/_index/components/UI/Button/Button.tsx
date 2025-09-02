import React from 'react';
import {CN} from "@/lib";

import './Button.scss';

const block = CN('index-button');

export const Button = ({...props}) => {
	return (
		<button className={block()} {...props}>
			Оформить подписку
		</button>
	);
};