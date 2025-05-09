import React from 'react';
import classes from './Rules.cn';
import './Rules.scss';
import {Heading, Text} from "@components";
import rules_text from './rules.json';

export const Rules = () => {
	const styles = classes();
	const {texts} = rules_text;

	return (
		<div className={styles.block}>
			<Heading data={{text: 'Правила пользования приложением ', tag: 'h3'}} cn={{align: 'text-center'}} />
			{texts?.map((text, inx) => <Text data={{text, tag: 'p'}} key={inx}/>)}
		</div>
	);
};