'use client';
import {PropsWithChildren, useEffect} from "react";
import {fetchUsers} from "@lib/store/features/user/UserSlice";
import {useAppDispatch} from "@lib/store/hooks";

const ProfileSettingsProvider = (props: PropsWithChildren) => {
	const {children} = props;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<>
			{children}
		</>
	);
}

export default ProfileSettingsProvider;