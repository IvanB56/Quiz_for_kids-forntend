import React from 'react';
import {Heading, SectionWhite} from "@components";
import {FormSupport} from "@widgets";

const Support = () => {
	return (
		<>
			<SectionWhite overflow="overflow-visible">
				<Heading data={{text: 'Напишите нам', tag: 'h1'}} cn={{margin: 'mb-6', align: 'text-center'}} />
				<Heading data={{text: 'Мы будем рады вашему письму ', tag: 'h2'}} cn={{margin: 'mb-16 max-md:mb-6', align: 'text-center'}} />
				<FormSupport />
			</SectionWhite>
		</>
	);
};

export default Support;