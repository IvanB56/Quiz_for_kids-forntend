'use client';
import * as React from "react";
import {Range as ReactRange} from "react-range";

type RangeProps = {
	label: string,
	step: number,
	min: number,
	max: number,
	defaultValue: number[]
}

export const Range: React.FC<RangeProps> = ({label, step, min = 1, max = 100, defaultValue = [50]}) => {
	const [values, setValues] = React.useState<number[]>([...defaultValue]);

	return (
		<ReactRange
			label={label}
			step={step}
			min={min}
			max={max}
			values={values}
			onChange={(values) => setValues(values)}
			renderTrack={({props, children}) => (
				<div
					{...props}
					style={{
						...props.style,
						height: "4px",
						width: "100%",
						backgroundColor: "hsla(192, 30%, 50%, 1)",
					}}
				>
					{children}
				</div>
			)}
			renderThumb={({ props }) => (
				<div
					{...props}
					key={props.key}
					style={{
						...props.style,
						height: "16px",
						width: "16px",
						borderRadius: "50%",
						backgroundColor: "hsla(192, 30%, 50%, 1)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<div
						style={{
							position: "absolute",
							top: "-32px",
							color: "#fff",
							fontWeight: "bold",
							fontSize: "14px",
							padding: "4px",
							borderRadius: "4px",
							backgroundColor: "hsla(192, 30%, 50%, 1)",
						}}
					>
						{values[0].toFixed(1)}
					</div>
				</div>
			)}
		/>
	);
};