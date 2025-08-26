import React from 'react';
import {Heading, SectionWhite, TextWithButton} from "@components";
import { GreetingsChild } from '@widgets';

const Earnings = () => {
	return (
		<>
			<GreetingsChild/>
			<SectionWhite overflow='overflow-visible'>
				<Heading data={{text: 'Поделись ссылкой с другом ', tag: 'h4'}} cn={{margin: 'mb-9'}}/>
				<TextWithButton text={'link'} />
			</SectionWhite>
		</>
	);
};

export default Earnings;
