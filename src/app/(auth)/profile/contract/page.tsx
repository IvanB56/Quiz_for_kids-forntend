import React from 'react';
import {Heading, SectionWhite, Text} from "@components";
import {contract} from "./contract";

const Contract = () => {
	return (
		<>
			<SectionWhite overflow='overflow-visible' position='relative'>
				<Heading data={{text: 'Договор между родителем и ребенком', tag: 'h3'}} cn={{align: 'text-center', margin: 'mb-6'}} />
				<div>
					{contract.texts.map((text, i) => <Text key={i} data={{text, tag: 'p'}} cn={{margin: 'mb-4', size: 'text-body-2'}} />)}
				</div>

			</SectionWhite>
		</>
	);
};

export default Contract;