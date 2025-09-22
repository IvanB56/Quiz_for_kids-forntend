'use client';
import React, {createContext, PropsWithChildren} from "react";

export type ChildContextType = {
	// childrenData: UserChildState['data'];
	// setChildrenData:  React.Dispatch<React.SetStateAction<UserChildState['data']>>;
	// loading?: boolean;
};

export const ChildContext = createContext<ChildContextType | null>(null);

export const ChildProvider = ({children}: PropsWithChildren) => {
	// const {data, loading} = useSelector(state => state.profileChild);
	// const [childrenData, setChildrenData] = useState<UserChildState['data'] | undefined>(undefined);

	// useEffect(() => {
	// 	if (data && data.length > 0) {
	// 		setChildrenData([...data]);
	// 	}
	// }, [data]);

	const value = {
		// childrenData: childrenData,
		// setChildrenData,
		// loading
	};

	return (
		<ChildContext.Provider value={value}>
			{children}
		</ChildContext.Provider>
	);
};