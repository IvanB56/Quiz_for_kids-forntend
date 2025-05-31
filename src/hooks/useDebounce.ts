import {useEffect, useState} from 'react'

export const useDebounce = (value: string, milliSeconds: number = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<string>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, milliSeconds);

		return () => {
			clearTimeout(handler);
		};
	}, [value, milliSeconds]);

	return debouncedValue;
};