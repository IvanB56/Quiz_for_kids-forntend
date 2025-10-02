'use client';
import React from 'react';
import './RunningLine.scss';
import { IChildrenAndClassName } from '@root/global';
import { CN } from '@/lib';

interface IRunningLine extends IChildrenAndClassName {
	text: string;
	speed: number;
}

const block = CN('running-line');

export const RunningLine = ({ text, speed = 20 }: IRunningLine) => {
	return (
		<div className={block()}>
			<div className={block('track')} style={{ animationDuration: `${speed}s` }}>
				<div className={block('content')} dangerouslySetInnerHTML={{ __html: text }} />
				<div className={block('content')} aria-hidden="true" dangerouslySetInnerHTML={{ __html: text }} />
			</div>
		</div>
	);
};
