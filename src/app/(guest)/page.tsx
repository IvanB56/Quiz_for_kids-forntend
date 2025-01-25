import {Greetings, PopularCategory, SliderQuiz} from "@widgets";
import React from "react";

const IndexPage = () => {
	return (
		<>
			<Greetings cn={{background: 'bg-section-grey', padding: 'py-[100px]'}}/>
			<PopularCategory cn={{padding: 'py-[80px]'}}/>
			<SliderQuiz cn={{background: 'bg-section-grey', padding: 'py-[80px]'}}/>
		</>
	);
};
export default IndexPage;
