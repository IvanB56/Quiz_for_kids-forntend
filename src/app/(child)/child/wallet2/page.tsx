import React from 'react';
import { CardWallet, Heading, SavingsMonet, WalletTable } from '@components';

const Earnings = () => {
	return (
		<>
			<Heading data={{text: "Мой сейф", tag: 'h1'}} className="mb-1 sm:mb-6"/>
			<div className={"flex flex-wrap sm:flex-nowrap justify-center gap-[15] sm:gap-[95] mb-[15] sm:mb-[55]"}>
				<SavingsMonet
					data={{
						title: "Коплю на смартфон",
						currentAmount: 4145,
						targetAmount: 10000,
						percentage: 35
					}}
					cn={{
						// margin: 'mb-4',
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
			<Heading data={{text: "Мой кошелек", tag: 'h1'}} className="mb-1 sm:mb-6"/>
			<div className={"flex flex-wrap sm:flex-nowrap justify-center gap-[15] sm:gap-[95] mb-[55]"}>
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
					cn={{display: 'flex', gap: 'gap-[15] sm:gap-[50]', direction: 'flex-col sm:flex-row'}}
				/>
			</div>
			<div>
				<WalletTable
					data={{
						rows:[
							{ date: '10.01.2025', deposited: 2000, withdrawn: 1500, balance: 500, piggyBank: 0 },
							{ date: '10.02.2025', deposited: 5000, withdrawn: 500, balance: 5000, piggyBank: 3000 },
							{ date: '10.02.2025', deposited: 5000, withdrawn: 500, balance: 5000, piggyBank: 3000 },
						],
					totalEarned: 99999,
					totalWithdrawn: 99999
					}} cn={{display: 'hidden sm:block'}}
				/>
			</div>

		</>
	);
};

export default Earnings;
