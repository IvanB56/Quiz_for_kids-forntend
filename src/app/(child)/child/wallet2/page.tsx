import React from 'react';
import { CardWallet, Heading, SavingsMonet, } from '@components';

const Earnings = () => {
	return (
		<>
			<Heading data={{text: "Мой сейф", tag: 'h1'}} className="mb-6"/>
			<div className={"flex justify-center gap-[95] mb-[55]"}>
				<SavingsMonet
					data={{
						title: "Коплю на смартфон",
						currentAmount: 4145,
						targetAmount: 10000,
						percentage: 35
					}}
					cn={{
						margin: 'mb-4',
					}}
				/>
				<CardWallet
					data={{
						earningsItems: [
							{ title: 'Сегодня заработал монет', titleSize: 'text-body-1', valueDailyEarnings: 50, },
						]
					}}
				/>
			</div>
			<Heading data={{text: "Мой кошелек", tag: 'h1'}} className="mb-6"/>
			<div className={"flex justify-center gap-[95]"}>
				<CardWallet
					data={{
						earningsItems: [
							{ title: 'Сумма монет в кошельке', titleSize: 'text-body-2', valueTotalWallet: 1024, },
							{ title: 'Положить в сейф', titleSize: 'text-body-2', valueInput: 300, },
						],
						buttonDescription: 'Положить'
					}} cn={{padding: 'py-[20px]', width: 'w-[450]'}}
				/>
				<CardWallet
					data={{
						earningsItems: [
							{ title: 'Введите сумму для снятия ', titleSize: 'text-body-2', valueInput: 1024, },
						],
						buttonDescription: 'Положить',
						textRequest: 'отправь запрос о деньгах маме или другому человеку, что бы они тебе перевели сумму.'
					}}
					cn={{display: 'flex', gap: 'gap-[50]'}}
				/>
			</div>

		</>
	);
};

export default Earnings;
