import React from 'react';
import {Heading, Helper, SectionWhite, Text, TextWithButton} from "@components";

const Earnings = () => {
	return (
		<>
			<Heading data={{text: "Заработок", tag: 'h1'}}/>
			<SectionWhite overflow='overflow-visible'>
				<Heading data={{text: 'Поделись ссылкой с другом ', tag: 'h4'}} cn={{margin: 'mb-9'}}/>
				<TextWithButton text={'link'} />
			</SectionWhite>
			<SectionWhite overflow='overflow-visible'>
				<Helper cn={{width: 'full'}}>
					<Text data={{text: 'Поделившись ссылкой вы или ваш ребенок получит вознаграждение 500 звезд, а так же получит 500 звезд ваш друг, который получит ссылку и купит подписку.', tag: 'p'}} />
				</Helper>
			</SectionWhite>
		</>
	);
};

export default Earnings;