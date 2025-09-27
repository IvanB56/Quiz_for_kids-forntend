'use client';
import * as React from "react";
import {Range as ReactRange} from "react-range";
import {Text} from '@components';
import classes from './Range.cn';
import {IRange} from './Range.types';
import './Range.scss';
import {useClassName} from "@hooks";


export const Range = (props: IRange) => {
	const { cn, label, step, min = 1, max = 100, defaultValue = [50], onChange, minLabel= 'Aa', maxLabel = 'Aa', className} = props;
	const styles = classes(cn);
	const [values, setValues] = React.useState<number[]>([...defaultValue]);

	const handleChange = (newValues: number[]) => {
		setValues(newValues);
		onChange?.(newValues);
	};

	return (
		<div className={useClassName(styles.block, className)}>
			<div className={styles.elementWrapperLabel}>
				<Text data={{text: `${minLabel}`, tag : 'p'}} cn={{size: 'text-body-3', color: 'text-black', weight: 'font-semibold'}} />
				<Text data={{text: `${maxLabel}`, tag : 'p'}} cn={{size: 'text-body-1', color: 'text-black', weight: 'font-semibold'}} />
			</div>
			<div className={styles.elementWrapperRange}>
				<div className={styles.elementContainerScale}>
					<ReactRange
						label={label}
						step={step}
						min={min}
						max={max}
						values={values}
						onChange={handleChange}
						renderTrack={({props, children}) => (
							<div className={styles.elementScale}
								{...props}
							>
								{/* Активная часть трека */}
								<div className={styles.elementScaleFilled}
									style={{
										width: `${((values[0] - min) / (max - min)) * 100}%`
									}}
								/>
								{children}
							</div>
						)}
						renderThumb={({ props }) => (
							<div className={styles.elementPoint}
								{...props}
								key={props.key}
							/>
						)}
					/>
				</div>
			</div>
		</div>
	);
};
