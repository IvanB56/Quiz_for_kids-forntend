'use client';
import React, {useCallback} from 'react';
import {Button, Text, WhiteCard} from "@components";
import {Tariff} from "@/entities/tariff";
import {useAppDispatch} from "@hooks";
import {fetchCreateSubscribe} from "@/features/Subscribes";

const SubscribeCard = ({tariff}: { tariff: Tariff }) => {
	const dispatch = useAppDispatch();

	const buttonClick = useCallback(() => {
		dispatch(fetchCreateSubscribe(tariff.slug));
	}, [dispatch, tariff.slug])

	return (
		<WhiteCard className="w-[20rem] flex flex-col gap-y-4 items-center">
			<Text data={{text: tariff.name, tag: 'p'}} className="mb-4"/>
			<Text data={{text: `${tariff.price} руб`, tag: 'p'}} className="mb-20"/>
			<Button onClick={buttonClick}>Оформить</Button>
		</WhiteCard>
	);
};

export default SubscribeCard;