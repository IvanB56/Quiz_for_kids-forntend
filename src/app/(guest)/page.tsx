import React from 'react';
// import {headers} from "next/headers"
import {IndexPage} from '@/app/(guest)/_index/index-page';

const Index = async () => {
	// const headersList = await headers();
	// const referer = headersList.get("referer");
	// const newUrl = new URL(String(referer));
	//
	// console.log('----------------------------------------------------------------------------------------------------------------------------------------')
	// console.log(newUrl.searchParams);
	// console.log('----------------------------------------------------------------------------------------------------------------------------------------')


	return <IndexPage />;
	// if  (referer) {
	// 	return <IndexPage />;
	// }
	//
	// return (
	// 	<>
	// 		Index
	// 		{/*<Greetings cn={{ background: 'bg-section-grey', padding: 'py-[100px] max-md:py-[40px]' }} />*/}
	// 		{/*<PopularCategory cn={{ padding: 'py-[100px] max-md:py-[40px]' }} />*/}
	// 		{/*<SliderQuiz cn={{ background: 'bg-section-grey', padding: 'py-[100px] max-md:py-[40px]' }} />*/}
	// 	</>
	// );
};
export default Index;
