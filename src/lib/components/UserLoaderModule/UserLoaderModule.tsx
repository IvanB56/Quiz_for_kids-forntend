'use client';
import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@hooks";
import {User, userActions} from "@/entities/user";

interface Props {
	children: ReactNode;
	user?: User;
}

export const UserLoaderModule = ({user, children}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user){
			dispatch(userActions.setAuthData(user));
		}
	}, [user, dispatch]);

	return (
		<>
			{children}
		</>
	);
};