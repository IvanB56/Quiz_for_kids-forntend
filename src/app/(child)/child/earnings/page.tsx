import React from 'react';
import { CardReward, Heading, Helper, SectionWhite, Text, TextWithButton, Button, CheckboxWithLabel } from '@components';

const Earnings = () => {
	return (
		<>
			<CardReward text={'Домашнее задание от мамы'} reward={'300'}/>
			<CardReward text={'Домашнее задание от папы'} reward={'500'} status={'выполнено'} variant={'green'}/>
			<CardReward text={'Домашнее задание от бабушки'} reward={'100'} status={'просрочено'} variant={'red'}/>
			<SectionWhite overflow='overflow-visible'>
				<div>
					<Text data={{ text: 'Домашнее задание от мамы от ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
					<Text data={{ text: '01.01.2025 ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
				</div>

				<CheckboxWithLabel label="вымыть посуду" />
				<Helper cn={{width: 'full'}}>
					<Text data={{text: 'здесь ты можешь написать комментарий', tag: 'p'}} />
				</Helper>
				<Button >Выполнить</Button>
			</SectionWhite>
		</>
	);
};

export default Earnings;
