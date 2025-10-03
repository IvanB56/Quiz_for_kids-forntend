import React from 'react';
import {GreetingsChild} from '@widgets';
import {getGreetings} from "@/features/server-api/greetings/getGreetings";

const Earnings = async () => {
	const {greetings} = await getGreetings();

	console.log(greetings);

	return (
		<>
			<GreetingsChild greetings={greetings}/>
		</>
	);
};

export default Earnings;
