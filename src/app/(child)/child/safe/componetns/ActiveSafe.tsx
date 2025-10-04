'use client';
import * as React from 'react';
import {useSelector} from "react-redux";
import {getGoalData} from "@/entities/goal";

export const ActiveSafe = () => {
	const goal = useSelector(getGoalData);

	console.log(goal);
	return (
		<div>
			Active Safe
		</div>
	);
};