import {Rules} from "@widgets";
import { CheckboxWithLabel, SectionWhite } from '@components';
import { child } from '@assets/mocks/Rules/rules';
import React from 'react';

const PageRules = () => {
	return (
		<>
			<SectionWhite overflow='overflow-visible'>
				<Rules texts={child}/>
				<div className={"flex justify-around mt-[100]"}>
					<CheckboxWithLabel
						labelBefore="Заказчик"
						defaultChecked={false}
					/>
					<CheckboxWithLabel
						labelBefore="Исполнитель"
						defaultChecked={true}
					/>
				</div>
			</SectionWhite>
		</>
	);
}

export default PageRules;
