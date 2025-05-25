'use client';
import React, {useEffect, useState} from 'react';
import {Heading, Input, SectionWhite} from "@components";
import {useDebounce} from "@/hooks/useDebounce";

const Slang = () => {
	const [value, setValue] = useState('');
	const searchValue = useDebounce(value);

	useEffect(() => {
		console.log(searchValue)
	}, [searchValue]);

	return (
		<>
			<Heading data={{text: "Словарь", tag: 'h1'}}/>
			<SectionWhite overflow={'overflow-visible'}>
				<Input type={'text'} value={value} placeholder={'Введите слово для поиска'} onChange={(e) => setValue(e.target.value)} />
			</SectionWhite>
		</>
	);
};

export default Slang;