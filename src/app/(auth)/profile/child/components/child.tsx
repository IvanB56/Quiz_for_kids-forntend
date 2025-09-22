'use client';
import React from 'react';
import {Heading, SectionWhite} from "@components";
import {CN} from "@/lib";

import './child.scss';

const block = CN('child')

const Child = () => {
	// const {childrenData} = useChildrenContext();

	// if (!childrenData || childrenData?.length === 0) return null;

	// const addChild = () => {
	// 	console.log('add')
	// };

	// const openStatistic = (_: typeof childrenData[number]) => {
	// 	return (
	// 		<Button asChild variant="link" className={block('icon')}>
	// 			<LinkUI data={{href: `statistic`}} >
	// 				<ExternalLink size={30}/>
	// 			</LinkUI>
	// 		</Button>
	//
	// 	)
	// }

	return (
		<SectionWhite className={block()}>
			<Heading data={{text: 'Уже с нами', tag: 'h3'}} cn={{margin: 'mb-4'}}/>
			{/*<Helper cn={{width: 'full'}} className="flex flex-column gap-4 items-start mb-4">*/}
			{/*	<Table>*/}
			{/*		<TableBody>*/}
			{/*			{childrenData?.map(item =>*/}
			{/*				(*/}
			{/*					<TableRow key={item.user_id} className={block('table-row')}>*/}
			{/*						<TableCell className="flex items-center justify-start lex-1 text-left">*/}
			{/*							<Text data={{text: `${item.surname} ${item.name} ${item.patronymic}`, tag: 'span'}}*/}
			{/*							      cn={{color: 'text-black'}}/>*/}
			{/*						</TableCell>*/}
			{/*						<TableCell className="flex items-center justify-center flex-1">*/}
			{/*							<Text data={{text: item.birthdate, tag: 'span'}}*/}
			{/*							      cn={{color: 'text-black'}}/>*/}
			{/*						</TableCell>*/}
			{/*						<TableCell className="flex items-center justify-center flex-1">*/}
			{/*							<Text data={{text: item.phone, tag: 'span'}}*/}
			{/*							      cn={{color: 'text-black'}}/>*/}
			{/*						</TableCell>*/}
			{/*						<TableCell className="flex items-center justify-end flex-0">*/}
			{/*							{openStatistic(item)}*/}
			{/*						</TableCell>*/}
			{/*					</TableRow>*/}
			{/*				)*/}
			{/*			)}*/}
			{/*		</TableBody>*/}
			{/*	</Table>*/}
			{/*</Helper>*/}
			{/*<Modal*/}
			{/*	trigger={() => (*/}
			{/*		<>Добавить ребенка</>*/}
			{/*	)}*/}
			{/*	header={() => (*/}
			{/*		<Heading data={{text: 'Добавить ребенка', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} />*/}
			{/*	)}*/}
			{/*	description={() => <FormAddChild />}*/}
			{/*	className={{*/}
			{/*		trigger: block('button')*/}
			{/*	}}*/}
			{/*/>*/}
		</SectionWhite>
	);
};

export default Child;