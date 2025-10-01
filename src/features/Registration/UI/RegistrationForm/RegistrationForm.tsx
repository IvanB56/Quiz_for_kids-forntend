import React from 'react';
import {CN} from '@lib/ClassBem';
import {useSearchParams} from 'next/navigation';
import {RegistrationParent} from "../RegistrationParent/RegistrationParent";
import {RegistrationStudent} from "../RegistrationStudent/RegistrationStudent";
import {Tabs, TabsContent, TabsList, TabsTrigger, Text} from '@components';

import './RegistrationForm.scss';

const block = CN('registration-form');

export const RegistrationForm = () => {
	const searchParams  = useSearchParams();
	const tab = searchParams.get('token') ? 'student': 'sponsor';

	return (
		<div className={block()}>
			<Tabs defaultValue="sponsor" value={tab}>
				<TabsList className="my-8">
					<TabsTrigger value="sponsor">
						<Text data={{text: 'Родитель', tag: 'span'}} />
					</TabsTrigger>
					<TabsTrigger value="student">
						<Text data={{text: 'Ребенок', tag: 'span'}} />
					</TabsTrigger>
				</TabsList>
				<TabsContent value="sponsor">
					<RegistrationParent />
				</TabsContent>
				<TabsContent value="student">
					<RegistrationStudent />
				</TabsContent>
			</Tabs>
		</div>
	);
};