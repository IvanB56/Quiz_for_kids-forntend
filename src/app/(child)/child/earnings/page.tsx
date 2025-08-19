import React from 'react';
import {
	CardReward,
	SectionWhite,
	Text,
	Helper,
	CheckboxWithLabel,
	Textarea,
	LoadReport,
	Button,
} from '@components';
import Image from 'next/image';
import image from '@assets/images/child/cleaning-service.webp';

const Earnings = () => {
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
							defaultChecked={true}
						/>
						<CheckboxWithLabel
							label="полить цветы"
							defaultChecked={false}
						/>
						<CheckboxWithLabel
							label="убрать со стола"
							defaultChecked={true}
						/>
						<CheckboxWithLabel
							label="пропылесосить комнату"
							defaultChecked={false}
						/>
						<CheckboxWithLabel
							label="убраться в комнате "
							defaultChecked={false}
						/>
						<CheckboxWithLabel
							label="постирать носки"
							defaultChecked={false}
						/>
						<CheckboxWithLabel
							label="вынести мусор"
							defaultChecked={false}
						/>
						<CheckboxWithLabel
							label="выгулять собаку"
							defaultChecked={false}
						/>
					</div>

					<Helper cn={{width: 'full'}}>
						<Textarea placeholder="здесь ты можешь написать комментарий " />
					</Helper>
					<LoadReport
						className={"mt-[35]"}
						uploadUrl="reports/upload"
						maxFiles={3}
					/>
					<div className={"flex justify-end mt-10"}>
						<Button>Выполнить</Button>
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
