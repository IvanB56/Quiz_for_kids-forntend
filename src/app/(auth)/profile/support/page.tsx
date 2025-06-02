import React from 'react';
import {Heading, SectionWhite} from "@components";
import {FormSupport} from "@widgets";

const Support = () => {
	return (
		<>
			<SectionWhite overflow="overflow-visible">
				<Heading data={{text: 'Напишите нам', tag: 'h1'}} cn={{margin: 'mb-6', align: 'text-center'}} />
				<Heading data={{text: 'Мы будем рады вашему письму ', tag: 'h2'}} cn={{margin: 'mb-16', align: 'text-center'}} />
				<FormSupport />
			</SectionWhite>
			{/*<Image src={img} alt="support" width={670} style={{marginTop: '-100px', marginLeft: 'auto'}} />*/}
		</>
	);
};

export default Support;