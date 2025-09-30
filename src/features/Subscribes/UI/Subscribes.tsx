'use client';
import {useSelector} from "react-redux";
import {getIsLoading, getTariffs} from "@/entities/tariff";
import SubscribeCard from "@/features/Subscribes/UI/SubscribeCard";

export const Subscribes = () => {
	const tariffs = useSelector(getTariffs);
	const isLoading = useSelector(getIsLoading);

	if  (isLoading) return 'Загрузка тарифов'

	return (
		<>
			{
				tariffs?.map(tariff => <SubscribeCard tariff={tariff} key={tariff.slug}/>)
			}
		</>
	);
};