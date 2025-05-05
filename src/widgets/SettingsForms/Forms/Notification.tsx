'use client';
import {classes} from "@/widgets/SettingsForms/SettingsForm.cn";
import React from "react";
import {Switch, Text} from "@components";
import {useClassName} from "@hooks";

export const Notification = () => {
	const styles = classes();

	const onCheckedChange = (event: React.MouseEvent<HTMLButtonElement>) => {
		const target = event.currentTarget;
		console.log(target)
	}


	return (
		<div className={styles.elementNotification}>
			<div className={useClassName(styles.elementField, 'justify-between')}>
				<Text data={{text: 'ребенок в сети', tag: 'p'}} />
				<Switch data-name={'isOnline'} onClick={onCheckedChange} />
			</div>
			<div className={useClassName(styles.elementField, 'justify-between')}>
				<Text data={{text: 'контроль копилки', tag: 'p'}} />
				<Switch name={'bankControl'} onClick={onCheckedChange} value={'off'}/>
			</div>
		</div>
	);
};