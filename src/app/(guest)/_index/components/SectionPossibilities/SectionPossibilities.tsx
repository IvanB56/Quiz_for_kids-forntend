import React from 'react';
import {CN} from "@/lib";
import {CardWithModal} from "./components/CardWithModal/CardWithModal";

import './SectionPossibilities.scss';
import {possibilities} from '@assets/mock/possibilities';

const block = CN('possibilities');

export const SectionPossibilities = () => {
	return (
		<section className={block()}>
			{
				possibilities.map((item) => (
					<CardWithModal
						title={item.title}
						img={item.img}
						data={item.description}
						key={item.id}
						className={block('card')}
					/>
				))
			}
		</section>
	);
};