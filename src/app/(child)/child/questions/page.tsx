import React from 'react';
import {Heading, Helper, SectionWhite, Text, TextWithButton} from "@components";
import { Greetings, ProfileHeading } from '@widgets';
import { GreetingsChild } from '@/widgets/GreetingsChild/GreetingsChild';

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
