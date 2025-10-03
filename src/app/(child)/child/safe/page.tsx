import React from 'react';
import {Heading, Separator, Text} from "@components";
import {SafeActiveLoaderModule} from "@lib/components/SafeActiveLoaderModule/SafeActiveLoaderModule";
import {getGoal} from "@/features/server-api/goal/getGoal";
import {ActiveSafe} from "@/app/(child)/child/safe/componetns/ActiveSafe";
import {EmptySafe} from "@/app/(child)/child/safe/componetns/EmptySafe";
import {CoinsBalance} from "@/features/Coins";

const Earnings = async () => {
	const {goal, error} = await getGoal();

	if (error) {
		return (
			<Text data={{text: error, tag: 'p'}} cn={{color: 'text-primary-red'}}/>
		)
	}

	return (
		<SafeActiveLoaderModule goal={goal}>
			<div className="flex justify-between">
				<Heading data={{text: "Мой сейф", tag: 'h1'}} className="mb-6"/>
				<CoinsBalance/>
			</div>
			<Separator className="my-4"/>
			{
				!!goal
					? <ActiveSafe/>
					: <EmptySafe/>
			}
			{/*<FormProfile variant={'new'}/>*/}
		</SafeActiveLoaderModule>
	);
};

export default Earnings;
