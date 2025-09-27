import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@components';
import {IWalletTable} from './WalletTable.types';
import classes from './WalletTable.cn';
import './WalletTable.scss';

export const WalletTable = (props: IWalletTable) => {
	const {
		data,
		cn
	} = props;

	const { rows, totalEarned, totalWithdrawn } = data;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<div className={styles.elementTitle}>Затраты в предыдущих месяцах</div>
			<div className={styles.elementContainer}>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Дата</TableHead>
							<TableHead>Внесено</TableHead>
							<TableHead>Снято</TableHead>
							<TableHead>Остаток</TableHead>
							<TableHead>В копилке</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows && rows.map((row, index) => (
							<TableRow key={index}>
								<TableCell>{row.date}</TableCell>
								<TableCell>{row.deposited}</TableCell>
								<TableCell>{row.withdrawn}</TableCell>
								<TableCell>{row.balance}</TableCell>
								<TableCell>{row.piggyBank}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className={styles.elementFooter}>
				<div>
					<span className={styles.elementFooterLabel}>ВСЕГО ЗАРАБОТАНО:</span>
					<span className={styles.elementFooterValue}>{totalEarned}</span>
				</div>
				<div>
					<span className={styles.elementFooterLabel}>ВЫВЕДЕНО СРЕДСТВ:</span>
					<span className={styles.elementFooterValue}>{totalWithdrawn}</span>
				</div>
			</div>
		</div>
	);
}


