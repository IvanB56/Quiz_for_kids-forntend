import React from 'react';
// import {headers} from "next/headers"
import {IndexPage} from '@/app/(guest)/_index/index-page';
import { IndexPage2 } from '@/app/(guest)/index2/index-page2';

const Index = async () => {
	// const headersList = await headers();
	// const referer = headersList.get("referer");
	// const newUrl = new URL(String(referer));
	//
	// console.log('----------------------------------------------------------------------------------------------------------------------------------------')
	// console.log(newUrl.searchParams);
	// console.log('----------------------------------------------------------------------------------------------------------------------------------------')

	// return <IndexPage />;
	return <IndexPage2 />;
};
export default Index;
