import React from 'react';
import classes from './SettingsAside.cn';
import {ISettingsAside} from "./SettingsAside.types";

export const SettingsAside = ({cn}: ISettingsAside) => {
	const styles = classes(cn);
	return (
		<aside className={styles.block}>
			zdsdfsdf
			sdfsdfdsf
		</aside>
	);
};