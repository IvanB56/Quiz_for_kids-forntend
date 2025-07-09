import React from 'react';
import classes from './Rules.cn';
import './Rules.scss';
import {Heading, Text} from "@components";
interface IRules {texts: Array<string>}

export const Rules = ({ texts }: IRules) => {
	const styles = classes();

	return (
		<div className={styles.block}>
			<Heading data={{text: 'Правила пользования приложением ', tag: 'h3'}} cn={{align: 'text-center'}} />
			{texts?.map((text, inx) => <Text data={{text, tag: 'p'}} key={inx}/>)}
		</div>
	);
};
