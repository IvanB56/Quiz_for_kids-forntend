'use client';
import React, {useState} from 'react';
import {Helper, Switch, Text} from "@components";

type SwitchWithHelperProps = {
	title: string;
	helpers: string[];
	state: 'on' | 'off';
	slug: 'easy' | 'hard';
}

export const SwitchWithHelper = ({helpers, title, state}: SwitchWithHelperProps) => {
	const [switchState, setSwitchState] = useState<'on' | 'off'>(state);

	const clickHandler = () => {
		setSwitchState(prev => prev === 'on' ? 'off' : 'on');
	};

	return (
		<>
			<Text data={{text: title, tag: 'span'}} cn={{size: 'text-body-2'}}/>
			<Switch value={switchState} onClick={clickHandler} checked={switchState === "on"}/>
			<Helper>{
				helpers.map(text => (
					<Text data={{text, tag: 'p'}} key={text}/>
				))
			}</Helper>
		</>
	);
};