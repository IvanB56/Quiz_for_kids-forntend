import React from 'react';
import {CN} from "@/lib";
import {Student} from "@/entities/student";
import {ExternalLink} from "lucide-react";
import {FormAddChild} from "./FormAddChild/FormAddChild";
import {
	Button,
	Heading,
	Helper,
	LinkUI,
	Modal,
	SectionWhite,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Text
} from "@components";

import './child.scss';

const block = CN('child')

interface Props {
	students: Student[]
}

const Child = ({students}: Props) => {

	const openStatistic = (userId: string | number) => {
		return (
			<Button asChild variant="link" className={block('icon')}>
				<LinkUI data={{href: `/profile/child/${userId}`}} >
					<Text data={{text: 'Перейти', tag: 'span'}} /> <ExternalLink size={30} className="ml-4"/>
				</LinkUI>
			</Button>

		)
	}

	return (
		<SectionWhite className={block()}>
			<Helper cn={{width: 'full'}} className="flex flex-column gap-4 items-start mb-4">
				<Table>
					<TableBody>
						{students?.map(item =>
							(
								<TableRow key={item.user_id} className={block('table-row')}>
									<TableCell className="flex items-center justify-start lex-1 text-left">
										<Text data={{text: `${item.surname} ${item.name} ${item.patronymic}`, tag: 'span'}}
										      cn={{color: 'text-black'}}/>
									</TableCell>
									<TableCell className="flex items-center justify-center flex-1">
										<Text data={{text: item.birthdate, tag: 'span'}}
										      cn={{color: 'text-black'}}/>
									</TableCell>
									<TableCell className="flex items-center justify-center flex-1">
										<Text data={{text: item.phone, tag: 'span'}}
										      cn={{color: 'text-black'}}/>
									</TableCell>
									<TableCell className="flex items-center justify-end flex-0">
										{openStatistic(item.user_id)}
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			</Helper>
			<Modal
				trigger={() => (
					<>Добавить ребенка</>
				)}
				header={() => (
					<Heading data={{text: 'Добавить ребенка', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}}/>
				)}
				description={() => <FormAddChild/>}
				className={{
					trigger: block('button')
				}}
			/>
		</SectionWhite>
	);
};

export default Child;