'use client';
import * as React from 'react';
import {useSelector} from "react-redux";
import {getGoalData, getGoalError, getGoalIsLoading} from "@/entities/goal";

export const EmptySafe = () => {
	const goal = useSelector(getGoalData);
	const isLoading = useSelector(getGoalIsLoading);
	const error = useSelector(getGoalError);

	console.log({goal, isLoading, error});
	return (
		<div>
			Empty Safe
		</div>
	);
};