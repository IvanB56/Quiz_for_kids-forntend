import React from 'react';
import {Heading, Helper, SectionWhite, Text, TextWithButton} from "@components";
import { CardHomework } from '@/components/CardHomework/CardHomework';

const Earnings = () => {
	return (
		<>
			<Heading className="text-right mb-[60]" data={{text: "Домашние задания", tag: 'h1'}} cn={{weight: 'fw600'}}/>
			<div className={"flex flex-wrap gap-x-[125] gap-y-[90]"}>
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
