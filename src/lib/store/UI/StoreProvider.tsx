'use client';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from "@lib/store";
import {StateSchema} from "@lib/store/config/StateSchema";

interface StoreProviderProps extends PropsWithChildren {
	initialState?: StateSchema
}

export default function StoreProvider({children, initialState}: StoreProviderProps) {
	const store = createReduxStore(initialState);
	return <Provider store={store}>{children}</Provider>
}