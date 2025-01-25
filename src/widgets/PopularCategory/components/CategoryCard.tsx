import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Text} from '@components';
import img from '@assets/images/popular-category/category.png';
import type {TypeCategoryCard} from "../types/CategoryCard.types";
import {classes} from "../cn/CategoryCard.cn";
import '../styles/CategoryCard.scss';

const CategoryCard = (props: TypeCategoryCard) => {
	const {cn} = props;
	const styles = classes(cn);
	return (
		<Link className={styles.block} href="#!">
			<Image src={img} alt=""/>
			<Text
				data={{text: 'Популярное', tag: 'p'}}
				cn={{color: 'text-black', weight: 'font-bold', size: 'text-body-2'}}
				className='uppercase'
			/>
		</Link>
	);
};

export default CategoryCard;
