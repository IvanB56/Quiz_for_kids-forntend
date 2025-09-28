'use client';
import React, {ReactNode, useEffect} from 'react';
import {Student, studentActions} from "@/entities/student";
import {useAppDispatch} from "@hooks";

interface Props {
	children: ReactNode;
	students?: Student[];
}

export const StudentLoaderModule = ({students, children}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(studentActions.setData(students || []))
		dispatch(studentActions.setCurrentStudent(students?.[0]?.user_id))
	}, [students, dispatch]);

	return (
		<>
			{children}
		</>
	);
};