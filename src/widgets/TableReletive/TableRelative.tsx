import React from 'react';
import {Table, TableBody, TableCell, TableRow} from "@components";
import {classes} from './TableRelative.cn';
import './TableRelative.scss';

export const TableRelative = () => {
	const styles = classes();

	return (
		<div className={styles.block}>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">Иванов Иван Иванович </TableCell>
						<TableCell>Отец</TableCell>
						<TableCell className={'text-right'}>в подписке с 01.01.2025</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Иванов Иван Иванович</TableCell>
						<TableCell>Дедушка</TableCell>
						<TableCell className={'text-right'}>в подписке с 01.01.2025</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Иванова Иванка Ивановна</TableCell>
						<TableCell>Бабушка</TableCell>
						<TableCell className={'text-right'}>в подписке с 01.01.2025</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default TableRelative;