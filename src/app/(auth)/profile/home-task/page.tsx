import React from 'react';
import {FormHomeTask, ProfileHeading, TableHomeTask} from "@widgets";
import {SectionWhite} from "@components";

const HomeTask = () => {
	return (
		<>
			<ProfileHeading title={"Домашние задания "}/>
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