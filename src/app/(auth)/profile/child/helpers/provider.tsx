'use client';
import React, {createContext, PropsWithChildren, useEffect, useState} from "react";
import {useAppSelector} from "@lib/store/hooks";
import {UserChildState} from "@lib/store/features/user";

export type ChildContextType = {
	childrenData: UserChildState['data'];
	setChildrenData:  React.Dispatch<React.SetStateAction<UserChildState['data']>>
};

export const ChildContext = createContext<ChildContextType | null>(null);

export const ChildProvider = ({children}: PropsWithChildren) => {
	const {data} = useAppSelector(state => state.profileChild);
	const [childrenData, setChildrenData] = useState<UserChildState['data']>([]);

	useEffect(() => {
		setChildrenData([...(data || [])]);
	}, [data]);

	const value = {
		childrenData: childrenData,
		setChildrenData
	};

	return (
		<ChildContext.Provider value={value}>
			{children}
		</ChildContext.Provider>
	);
};