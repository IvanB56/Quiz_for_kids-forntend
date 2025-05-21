'use client';
import {PropsWithChildren, useEffect} from "react";
import {useAppDispatch} from "@lib/store/hooks";
import {fetchUserChild} from "@lib/store/features/user";

export const ProfileChildProvider = (props: PropsWithChildren) => {
	const {children} = props;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserChild());
	}, [dispatch]);


	return (
		<>
			{children}
		</>
	);
}