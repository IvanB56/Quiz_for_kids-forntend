'use client';
import React from 'react';
import {FormRelatives, TableRelative} from "@widgets";
import {Heading, SectionWhite,} from "@components";

const Relatives = () => {
	return (
		<>
			<SectionWhite overflow={'overflow-visible'}>
				<Heading
					data={{text: 'Кого добавим?', tag: 'h4'}}
					cn={{margin: 'mb-[42px]'}}
				/>
				<FormRelatives/>
			</SectionWhite>
			<SectionWhite overflow={'overflow-visible'}>
				<Heading data={{text: 'Уже с нами', tag: 'h4'}} cn={{margin: 'mb-[42px]'}}/>
				<TableRelative />
			</SectionWhite>
		</>
	);
};

export default Relatives;