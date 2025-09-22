'use client';
import * as React from 'react';
import {Heading, Helper, Modal, SectionWhite, Text} from "@components";
import {useChildrenContext} from "@/app/(auth)/profile/child/hooks/useChildrenContext";

import './ChildEmpty.scss';
import {CN} from "@/lib";
import {FormAddChild} from '../FormAddChild/FormAddChild';

const block = CN('child-empty');

export const ChildEmpty = () => {
	const {childrenData, loading} = useChildrenContext();

	if (loading || childrenData && childrenData.length > 0) return null;

	return (
		<SectionWhite className={block()}>
			<Helper cn={{width: 'full'}}>
				<Text data={{text: 'У вас не добавлено ни одного ребенка', tag: 'p'}} cn={{color: 'text-black', size: 'text-body-1', weight: 'font-semibold'}} />
				<Modal
					trigger={() => (
						<>Добавить ребенка</>
					)}
					header={() => (
						<Heading data={{text: 'Добавить ребенка', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} />
					)}
					description={() => <FormAddChild />}
					className={{
						trigger: block('button')
					}}
				/>
			</Helper>
		</SectionWhite>
	);
};