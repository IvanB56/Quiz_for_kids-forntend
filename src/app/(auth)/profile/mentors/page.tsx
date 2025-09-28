import React from 'react';
import {FormMentor} from "@widgets";
import {SectionWhite} from "@components";

const Mentors = () => {
	return (
		<>
			<SectionWhite overflow="overflow-visible">
				<FormMentor title="Связаться с психологом" />
			</SectionWhite>
			<SectionWhite overflow="overflow-visible">
				<FormMentor title="Связаться с репетитором" />
			</SectionWhite>
		</>
	);
};

export default Mentors;