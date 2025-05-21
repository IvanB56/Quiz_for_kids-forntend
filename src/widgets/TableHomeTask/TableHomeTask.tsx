import React from 'react';
import {classes} from "./TableHomeTask.cn";
import {Button, Table, TableBody, TableCell, TableRow, Text} from "@components";

export const TableHomeTask = () => {
	const styles = classes();

	return (
		<div className={styles.block}>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">
							<Text data={{text: 'Убраться в комнате:', tag: 'p'}} />
							<Text data={{text: 'Протереть пыль, полить цветы, прибраться в шкафу, застелить постель ', tag: 'p'}}  cn={{size: 'text-body-3'}} />
						</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<Text data={{text: 'Убраться в комнате:', tag: 'p'}} />
							<Text data={{text: 'Протереть пыль, полить цветы, прибраться в шкафу, застелить постель ', tag: 'p'}}  cn={{size: 'text-body-3'}} />
						</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<Text data={{text: 'Убраться в комнате:', tag: 'p'}} />
							<Text data={{text: 'Протереть пыль, полить цветы, прибраться в шкафу, застелить постель ', tag: 'p'}}  cn={{size: 'text-body-3'}} />
						</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};