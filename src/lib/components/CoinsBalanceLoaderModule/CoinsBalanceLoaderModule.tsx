'use client';
import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@hooks";
import {coinsActions, fetchGetBalance} from "@/features/Coins";

interface Props {
	balance?: number;
	children: ReactNode
}

const CoinsBalanceLoaderModule = ({children, balance}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (balance) {
			dispatch(coinsActions.setBalance(balance));
		} else {
			dispatch(fetchGetBalance());
		}
	}, [balance, dispatch]);

	return (
		<>
			{children}
		</>
	);
};

export default CoinsBalanceLoaderModule;