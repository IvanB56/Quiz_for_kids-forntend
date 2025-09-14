import React from 'react';
import {Heading, } from "@components";
import {FormProfile} from "@widgets";

const Earnings = () => {
	return (
		<>
			<Heading data={{text: "Мой сейф", tag: 'h1'}} className="mb-6"/>

			<FormProfile
				variant={'new'}
			/>
		</>
	);
};

export default Earnings;
