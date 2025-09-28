import React from 'react';
import {FormHomeTask, TableHomeTask} from "@widgets";
import {SectionWhite} from "@components";

const HomeTask = () => {
	return (
		<>
			<SectionWhite overflow='overflow-visible'>
				<FormHomeTask />
			</SectionWhite>
			<SectionWhite overflow='overflow-visible'>
				<TableHomeTask />
			</SectionWhite>
		</>
	);
};

export default HomeTask;