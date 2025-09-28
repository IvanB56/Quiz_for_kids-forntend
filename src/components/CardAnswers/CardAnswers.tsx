'use client';
import React, {PropsWithChildren} from 'react';
import {Heading, Helper, SectionWhite, Text} from '@components';

interface CardAnswersProps extends PropsWithChildren {
	textData: {
		text?: string;
		answer?: string
	};
}

export const CardAnswers = ({children, textData }: CardAnswersProps) => {
	const {text = '', answer = ''} = textData;

	return (
		<div className="mt-12">
			{children}
			<SectionWhite overflow="overflow-visible">
				<Heading data={{text: answer, tag: 'h3'}} cn={{margin: 'mb-4', align: 'text-center'}} />
				<Helper cn={{width: 'full'}}>
					<Text
						data={{ text, tag: 'p' }}
						cn={{size: 'text-body-1', color: 'text-black'}} className="!font-bold text-center"
					/>
				</Helper>
			</SectionWhite>
		</div>
	);
};
