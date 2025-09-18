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
			<div className={"flex flex-col gap-[20] sm:gap-[50]"}>
				<CardReward text={'Домашнее задание от мамы'} reward={'300'}/>
				<SectionWhite overflow='overflow-visible'>
					<div className="mb-[15] sm:mb-[60]">
						<Text data={{ text: 'Домашнее задание от мамы от ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
						<Text data={{ text: '01.01.2025 ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
					</div>

					<div className={"mb-[15] sm:mb-[40]"}>
						<CardText data={{
							textItems: [
								{ title: 'Убрать комнату:', titleSize: 'text-body-1', titleWeight: 'font-medium', titleMargin: 'mb-[15] sm:mb-[25]'},
								{ title: 'Застелить постель, полить цветы, пропылесосить, сложить вещи.', titleSize: 'text-body-1', titleWeight: 'font-medium',},
							]}} cn={{background: 'bg-button-hover', width: 'w-max-50'}}
						/>
					</div>

					<Helper cn={{width: 'full', padding: 'p-homework'}}>
						<Textarea placeholder="здесь ты можешь написать комментарий " />
					</Helper>
					<LoadReport
						className={"mt-[25] sm:mt-[35]"}
						uploadUrl="reports/upload"
						maxFiles={3}
					/>
					<div className={"flex justify-center sm:justify-end mt-5 sm:mt-10"}>
						<Button>Выполнить</Button>
					</div>
				</SectionWhite>
				<CardReward text={'Домашнее задание от папы'} reward={'500'} status={'выполнено'} variant={'green'}/>
				<CardReward text={'Домашнее задание от бабушки'} reward={'100'} status={'просрочено'} variant={'red'}/>
				<Image className={"hidden sm:block"} src={image} alt="Приветствие" width={736} />
			</div>
    </>
  );
};

export default Earnings;
