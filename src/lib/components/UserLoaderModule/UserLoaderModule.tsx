'use client';
import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@hooks";
import {fetchUser, User, userActions} from "@/entities/user";

interface Props {
	children: ReactNode;
	user?: User;
}

export const UserLoaderModule = ({user, children}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user){
			dispatch(userActions.setAuthData(user));
		} else {
			dispatch(fetchUser());
		}
	}, [user, dispatch]);

	return (
		<>
			{children}
		</>
	);
};