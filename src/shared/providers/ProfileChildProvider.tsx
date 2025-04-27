'use client';
import {createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState} from "react";


type TypeImages = {
	image: {
		img?: string;
		alt?: string;
	}[]
};
type TypeChild = Record<'name' | 'coins' | 'piggyBank' | 'age', string> & TypeImages;

interface ProfileChildContextType {
	child: TypeChild;
	childId: string;
	setChildId: Dispatch<SetStateAction<string>>;
}

const ProfileChildContext = createContext<ProfileChildContextType>({
	child: {
		name: '',
		coins: '',
		piggyBank: '',
		image: [],
		age: ''
	},
	childId: '',
	setChildId: () => {
	}
});

const ProfileChildProvider = (props: PropsWithChildren) => {
	const {children} = props;
	const [child, setChild] = useState<TypeChild>({
		name: '',
		coins: '',
		piggyBank: '',
		image: [],
		age: ''
	});
	const [childId, setChildId] = useState<string>('');

	useEffect(() => {
		const data = {
			name: 'Антон',
			coins: '365',
			piggyBank: '1024',
			image: [],
			age: '13'
		}

		setChild(data);
	}, [childId]);

	return (
		<ProfileChildContext.Provider value={{child, childId, setChildId}}>
			{children}
		</ProfileChildContext.Provider>
	);
}

export {ProfileChildContext};
export default ProfileChildProvider;