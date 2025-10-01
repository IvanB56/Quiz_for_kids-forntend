import React from 'react';
import {getWithdrawalLogUser} from "@/features/server-api/coins/getWithdrawalLogUser";

const Page = async ({params}: {params: Promise<{id: string}>}) => {
	const {id} = await params;

	const {data, error} = await getWithdrawalLogUser(id);

	// if (error) return redirect('/404');

	return (
		<div>
			{data && JSON.stringify(data)}
			{error && JSON.stringify(error)}
		</div>
	);
};

export default Page;