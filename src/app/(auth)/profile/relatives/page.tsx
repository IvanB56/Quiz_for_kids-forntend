'use client';
import React from 'react';
import {ProfileHeading} from "@widgets";
import {SectionWhite, Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@components";

const Relatives = () => {
	// const [selectedOption, setSelectedOption] = useState('');


	return (
		<>
			<ProfileHeading title={"Родственники"}/>
			<SectionWhite>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Выберете из списка" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="father">Отец</SelectItem>
						<SelectItem value="mother">Мать</SelectItem>
						<SelectItem value="grandmother">Бабушка</SelectItem>
						<SelectItem value="grandfather">Дедушка</SelectItem>
						<SelectItem value="sister">Сестра</SelectItem>
						<SelectItem value="brother">Брат</SelectItem>
					</SelectContent>
				</Select>
			</SectionWhite>
		</>
	)
		;
};

export default Relatives;