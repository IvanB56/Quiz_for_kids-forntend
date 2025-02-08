import React from 'react';
import {Heading} from "@components";
import {TypePopularCategory} from "./types/PopularCategory.types";
import {classes} from "./cn/PopularCategory.cn";
import PopularCategoryController from "./controllers/PopularCategoryController";
import CategoryCard from "./components/CategoryCard";
import './styles/PopularCategory.scss';

export const PopularCategory = (props: TypePopularCategory) => {
	const {cn} = props;
	const styles = classes(cn);
	const {cards} = PopularCategoryController();

	return (
		<section className={styles.block}>
			<div className="container">
				<Heading data={{text: 'Популярные категории', tag: 'h2'}} cn={{margin: 'mb-8'}}/>
				<div className={styles.elementCardsWrapper}>
					{cards.map((card, idx) =>
						<CategoryCard data={{card}} key={idx}/>)}
				</div>
			</div>
		</section>
	);
};
