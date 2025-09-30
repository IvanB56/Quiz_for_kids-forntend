'use client';
import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@hooks";
import {tariffActions} from "@/entities/tariff";
import {fetchGetAllTariffs, fetchGetSubscribeActive} from "@/features/Subscribes";
import {ActiveTariff} from "@/entities/tariff/model/types/tariffSchema";

interface Props {
	children: ReactNode;
	tariff?: ActiveTariff;
}

export const TariffLoaderModule = ({tariff, children}: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (tariff) {
			dispatch(tariffActions.setActiveTariff(tariff));
		} else {
			dispatch(fetchGetSubscribeActive());
		}
	}, [tariff, dispatch]);

	useEffect(() => {
		dispatch(fetchGetAllTariffs());
	}, [dispatch]);

	return (
		<>
			{children}
		</>
	);
};