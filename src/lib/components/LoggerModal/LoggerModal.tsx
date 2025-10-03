import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
	data: {
		[p: string]: any
	}
}

export const LoggerModal = ({children, data}: Props) => {
	return (
		<>
			<div
				className="absolute left-[50px] top-[50px] min-w-[300px] min-h-[300px] bg-white border-black border-2 shadow-dark">
				{
					data && <div className="text-wrap whitespace-break-spaces">
						{
							JSON.stringify(data)
						}
					</div>
				}
			</div>
			{children}
		</>
	);
};