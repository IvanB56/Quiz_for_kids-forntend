import React from 'react';
import {CardHomework, Heading, Separator} from "@components";
import {CoinsBalance} from "@/features/Coins";

const Earnings = () => {
	return (
		<>
			<div className="flex justify-between">
				<Heading data={{text: "Домашние задания", tag: 'h1'}} className="mb-6"/>
				<CoinsBalance/>
			</div>
			<Separator className="my-4"/>
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
