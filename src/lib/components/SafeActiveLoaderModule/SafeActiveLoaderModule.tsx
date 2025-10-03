'use client';
import * as React from 'react';
import {PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from "@hooks";
import {Goal} from "@/entities/goal/model/types/GoalSchema";
import {fetchGoalActive, goalActions} from "@/entities/goal";

interface Props extends PropsWithChildren {
	goal?: Goal
}

export const SafeActiveLoaderModule = ({children, goal}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (goal) {
			dispatch(goalActions.setData(goal));
		} else {
			dispatch(fetchGoalActive());
		}
	}, [dispatch, goal]);
	
	return (
		<>
			{children}
		</>
	);
};