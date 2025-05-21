'use client';
import React from 'react';
import {SectionWhite, Text} from "@components";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import {Bar} from "react-chartjs-2";
import {ProfileHeading} from "@widgets";

Chart.register(CategoryScale);

const Statistic = () => {
	const chartData = {
		labels: ['предмет1', 'предмет2', 'предмет3', 'предмет4', 'предмет5', 'предмет6', 'предмет7', 'предмет8', 'предмет9', 'предмет10', 'предмет11', 'предмет12'],
		datasets: [
			{
				label: 'Статистика по предметам',
				data: [70, 15, 30, 20, 40, 10, 60, 18, 57, 55, 98, 40],
				backgroundColor: [
					'hsla(348, 100%, 94%, 1)',
					'hsla(30, 100%, 93%, 1)',
					'hsla(42, 100%, 93%, 1)',
					'hsla(180, 47%, 90%, 1)',
					'hsla(205, 82%, 91%, 1)',
					'hsla(261, 100%, 94%, 1)',
					'hsla(210, 5%, 92%, 1)',
					'hsla(348, 100%, 94%, 1)',
					'hsla(30, 100%, 93%, 1)',
					'hsla(205, 82%, 91%, 1)',
					'hsla(261, 100%, 94%, 1)',
					'hsla(180, 5%, 96%, 1)'
				],
				borderColor: '#000',
				borderWidth: 1
			}
		]
	};

	return (
		<>
			<ProfileHeading title={"Статистика"}/>
			<SectionWhite overflow='overflow-visible'>
				<Bar data={chartData} fallbackContent={<Text data={{text: 'Загрузка данных', tag: 'p'}}/>}/>
			</SectionWhite>
		</>
	);
};

export default Statistic;