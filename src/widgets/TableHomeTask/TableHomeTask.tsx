import React from 'react';
import {classes} from "@/widgets/TableReletive/TableRelative.cn";
import {Button, Table, TableBody, TableCell, TableRow} from "@components";

export const TableHomeTask = () => {
	const styles = classes();

	return (
		<div className={styles.block}>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">Убраться в комнате</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Убраться в комнате</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Убраться в комнате</TableCell>
						<TableCell className={'text-right'}>
							<Button>Повторить</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};