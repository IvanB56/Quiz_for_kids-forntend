import React from 'react';
import {Heading, CardHomework } from "@components";

const Earnings = () => {
	return (
		<>
			<Heading className="text-right mb-[20] sm:mb-[60]" data={{text: "Домашние задания", tag: 'h1'}} cn={{weight: 'fw600'}}/>
			<div className={"flex flex-wrap justify-center gap-x-[15] sm:gap-x-[125] gap-y-[10] sm:gap-y-[90]"}>
				<CardHomework data={{complexity: '1'}}/>
				<CardHomework data={{complexity: '1'}}/>
				<CardHomework data={{complexity: '1'}}/>
				<CardHomework data={{complexity: '1'}}/>
				<CardHomework data={{complexity: '1'}}/>
				<CardHomework data={{complexity: '1'}}/>
			</div>
		</>
	);
};

export default Earnings;
