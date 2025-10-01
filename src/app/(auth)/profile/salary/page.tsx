import React from 'react';
import {HeadingWithStudent} from "@widgets";
import {Separator} from "@components";

const SalaryPage = async () => {
	return (
		<>
			<HeadingWithStudent title="Выплата зарплаты ребенку"/>
			<Separator className="my-4"/>
			{/*<div className={"flex gap-10"}>*
			{/*	<SectionWhite className="flex-1">*/}
			{/*		<Heading data={{text: 'Общий счет ребенка ', tag: 'h3'}} cn={{size: 'h3'}}/>*/}
			{/*		<Heading data={{tag: 'h4'}} cn={{size: 'h4'}}*/}
			{/*		         className="flex justify-between items-center px-4 py-3 bg-orange rounded-14 mt-8">*/}
			{/*			{summ} <span>рублей</span>*/}
			{/*		</Heading>*/}
			{/*		<Helper cn={{width: 'full'}} className="mt-8">*/}
			{/*			<Text data={{text: 'Общий баланс монет у ребенка', tag: 'p'}} cn={{color: 'text-black'}}/>*/}
			{/*			<Button type="button" size="small" className="m-auto mt-4">Подробнее</Button>*/}
			{/*		</Helper>*/}
			{/*	</SectionWhite>*/}
			{/*	<SectionWhite className="flex-1">*/}
			{/*		<Heading data={{text: 'Запрос на снятие денег ', tag: 'h3'}} cn={{size: 'h3'}}/>*/}
			{/*		<Heading data={{tag: 'h4'}} cn={{size: 'h4'}}*/}
			{/*		         className="flex justify-between items-center px-4 py-3 bg-orange rounded-14 mt-8">*/}
			{/*			{salary} <span>рублей</span>*/}
			{/*		</Heading>*/}
			{/*		<Helper cn={{width: 'full'}} className="mt-8">*/}
			{/*			<Text data={{text: 'Как выплачивать зарплату ребенку', tag: 'p'}} cn={{color: 'text-black'}}/>*/}
			{/*			<Button type="button" size="small" className="m-auto mt-4">Подробнее</Button>*/}
			{/*		</Helper>*/}
			{/*	</SectionWhite>*/}
			{/*</div>*/}
			{/*<div className="flex items-centr justify-center">*/}
			{/*	<Modal*/}
			{/*		open={modalOpen}*/}
			{/*		onOpenChange={setModalOpen}*/}
			{/*		trigger={() => (*/}
			{/*			<Text data={{text: 'Выплатить зарплату', tag: 'span'}} cn={{size: 'text-body-1', color: 'text-primary-white'}} className="!font-bold"/>*/}
			{/*		)}*/}
			{/*		header={() => (*/}
			{/*			<Heading data={{text: 'Выплата зарплаты', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}}/>*/}
			{/*		)}*/}
			{/*		description={() => (*/}
			{/*			<div className="flex flex-col">*/}
			{/*				<Text data={{text: 'Вы действительно хотите обменять монеты?', tag: 'p'}}/>*/}
			{/*				<div className="flex gap-8 mt-10">*/}
			{/*					<Button variant="default" onClick={() => setModalOpen(false)}>Отмена</Button>*/}
			{/*					<Button variant="green" className="!rounded-100" onClick={() => {*/}
			{/*						setSalary(0);*/}
			{/*						setSumm(3000);*/}
			{/*						setModalOpen(false)*/}
			{/*					}}>Выплатить</Button>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		)}*/}
			{/*		className={{*/}
			{/*			trigger: "!py-6 !px-8 !rounded-100 mt-10 bg-green-light"*/}
			{/*		}}*/}
			{/*	/>*/}
			{/*</div>*/}
		</>
	);
};

export default SalaryPage;