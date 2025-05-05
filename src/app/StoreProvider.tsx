'use client';
import React, {PropsWithChildren, useRef} from 'react';
import {Provider} from 'react-redux';
import {AppStore, makeStore} from "@lib/store/store";
import {UserState} from "@lib/store/features/user/UserSlice";

interface IStoreProvider extends PropsWithChildren{
	user?: UserState | null
}

export default function StoreProvider({ children }: IStoreProvider) {
	const storeRef = useRef<AppStore>(undefined);

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}