'use client';
import React, {ChangeEvent, Fragment, useEffect, useMemo, useState} from 'react';
import {Heading, Input, SectionWhite, Text} from "@components";
import {useDebounce} from "@/hooks/useDebounce";
import {data as slangList} from "@assets/data/glossary";

const Slang = () => {
	const [value, setValue] = useState('');
	const data = useMemo(() => Object.entries(slangList).map(([char, value]) => ({char, value})), []);
	const [slangArr, setSlangArr] = useState(data);
	const searchValue = useDebounce(value);

	useEffect(() => {
		if  (searchValue) {
			setSlangArr(() => {
					return [...data].filter(item => {
						console.log(item.char);
						console.log(searchValue);
						console.log(item.char.toLowerCase() === searchValue.toLowerCase());
						return item.char.toLowerCase() === searchValue.toLowerCase()
					});
				}
			)
		} else {
			setSlangArr([...data]);
		}
	}, [data, searchValue]);

	const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<>
			<Heading data={{text: "Словарь", tag: 'h1'}}/>
			<SectionWhite overflow={'overflow-visible'}>
				<Input type={'text'} value={value} placeholder={'Введите слово для поиска'} onChange={changeInputHandler}/>
			</SectionWhite>
			<SectionWhite overflow={'overflow-visible'}>
				{
					slangArr?.map(({char, value}) => (
						<Fragment key={char}>
							<Heading data={{text: char, tag: 'h4'}} cn={{margin: 'mb-8'}}/>
							<ul className="mb-8">
								{
									Object.entries(value)?.map(([name, text]) => (
										<li key={name} className="mb-2">
											<Text data={{text: `${name} - `, tag: 'span'}} cn={{weight: 'font-bold'}}/>
											<Text data={{text, tag: 'span'}} cn={{weight: 'font-medium'}}/>
										</li>
									))
								}
							</ul>
						</Fragment>
					))
				}
			</SectionWhite>
		</>
	);
};

export default Slang;