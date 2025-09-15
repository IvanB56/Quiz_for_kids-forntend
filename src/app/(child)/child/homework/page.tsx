import React from 'react';
import {
	CardReward,
	SectionWhite,
	Text,
	Helper,
	CheckboxWithLabel,
	Textarea,
	LoadReport,
	Button, CardText,
} from '@components';
import Image from 'next/image';
import image from '@assets/images/child/cleaning-service.webp';

const Earnings = () => {
  return (
    <>
			<div className={"flex flex-col gap-[50]"}>
				<CardReward text={'Домашнее задание от мамы'} reward={'300'}/>
				<SectionWhite overflow='overflow-visible'>
					<div className="mb-[60]">
						<Text data={{ text: 'Домашнее задание от мамы от ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
						<Text data={{ text: '01.01.2025 ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
					</div>

					<div className={"mb-[40]"}>
						<CardText data={{
							textItems: [
								{ title: 'Убрать комнату:', titleSize: 'text-body-1', titleWeight: 'font-medium', titleMargin: 'mb-[25]'},
								{ title: 'Застелить постель, полить цветы, пропылесосить, сложить вещи.', titleSize: 'text-body-1', titleWeight: 'font-medium',},
							]}} cn={{background: 'bg-button-hover', width: 'w-max-50'}}
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
