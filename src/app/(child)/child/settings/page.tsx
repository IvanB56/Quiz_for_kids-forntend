import React from 'react';
import { Heading, Text, SectionWhite, Range } from '@components';

const Earnings = () => {
	return (
		<>
			<SectionWhite overflow='overflow-visible'>
				<Heading data={{text: 'Настройка шрифта', tag: 'h4'}} cn={{margin: 'mb-9'}}/>
				<Text data={{text: 'Размер ', tag : 'p'}} />
				<Range
					label={'Размер шрифта'}
					step={1}
					min={0}
					max={12}
					defaultValue={[7]}
				/>
			</SectionWhite>
		</>
	);
};

export default Earnings;
