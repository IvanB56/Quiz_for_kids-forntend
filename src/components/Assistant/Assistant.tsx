import React from 'react';
import {CN} from "@/lib";

import './Assistant.scss';
import {Text} from "@/components";

const block = CN('assistant');

export const Assistant = () => {
	return (
		<div className={block()}>
			<div  className={block('text-wrapper')}>
				<Text data={{
					text: 'Ответственность за воспитание возьмет на себя Алина - <br> цифровая помощница - ассистентка', tag: 'p'
				}} className={block('text')}/>
			</div>
			<div className={block('image')}>
				<img src="/images/index-new/assistant.jpg" alt="assistant"/>
			</div>
		</div>
	);
};