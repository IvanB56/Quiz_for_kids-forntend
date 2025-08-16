'use client';

import React from 'react';
import {
	CardReward,
	Heading,
	Helper,
	SectionWhite,
	Text,
	TextWithButton,
	Button,
	CheckboxWithLabel,
	Textarea,
	LoadReport,
} from '@components';
import Image from 'next/image';
import image from '@assets/images/child/cleaning-service.webp';

const Earnings = () => {
  const [checked, setChecked] = React.useState({
    dishes: true,
    flowers: false,
		clean: true,
		vacuumСleaning: false,
		cleaningRoom: false,
		washSocks: false,
		takeTrash: false,
		walkDog: false,
  });

  return (
    <>
			<div className={"flex flex-col gap-[50]"}>
				<CardReward text={'Домашнее задание от мамы'} reward={'300'}/>
				<SectionWhite overflow='overflow-visible'>
					<div className="mb-[110]">
						<Text data={{ text: 'Домашнее задание от мамы от ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
						<Text data={{ text: '01.01.2025 ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
					</div>

					<div className={"flex flex-wrap gap-y-[50] mb-[40]"}>
						<CheckboxWithLabel
							className={"basic-250"}
							label="вымыть посуду"
							checked={checked.dishes}
							onChange={v => setChecked(prev => ({ ...prev, dishes: v }))}
						/>
						<CheckboxWithLabel
							label="полить цветы"
							checked={checked.flowers}
							onChange={v => setChecked(prev => ({ ...prev, flowers: v }))}
						/>
						<CheckboxWithLabel
							label="убрать со стола"
							checked={checked.clean}
							onChange={v => setChecked(prev => ({ ...prev, clean: v }))}
						/>
						<CheckboxWithLabel
							label="пропылесосить комнату"
							checked={checked.vacuumСleaning}
							onChange={v => setChecked(prev => ({ ...prev, vacuumСleaning: v }))}
						/>
						<CheckboxWithLabel
							label="убраться в комнате "
							checked={checked.cleaningRoom}
							onChange={v => setChecked(prev => ({ ...prev, cleaningRoom: v }))}
						/>
						<CheckboxWithLabel
							label="постирать носки"
							checked={checked.washSocks}
							onChange={v => setChecked(prev => ({ ...prev, washSocks: v }))}
						/>
						<CheckboxWithLabel
							label="вынести мусор"
							checked={checked.takeTrash}
							onChange={v => setChecked(prev => ({ ...prev, takeTrash: v }))}
						/>
						<CheckboxWithLabel
							label="выгулять собаку"
							checked={checked.walkDog}
							onChange={v => setChecked(prev => ({ ...prev, walkDog: v }))}
						/>
					</div>

					<Helper cn={{width: 'full'}}>
						<Textarea placeholder="здесь ты можешь написать комментарий " />
					</Helper>
					<LoadReport
						className={"mt-[35]"}
						uploadUrl="reports/upload"
						maxFiles={3}
						onUploaded={(resp) => console.log(resp)}
					/>
					<div className={"flex justify-end mt-10"}>
						<Button >Выполнить</Button>
					</div>
				</SectionWhite>
				<CardReward text={'Домашнее задание от папы'} reward={'500'} status={'выполнено'} variant={'green'}/>
				<CardReward text={'Домашнее задание от бабушки'} reward={'100'} status={'просрочено'} variant={'red'}/>
				<Image src={image} alt="Приветствие" width={736} />
			</div>
    </>
  );
};

export default Earnings;
