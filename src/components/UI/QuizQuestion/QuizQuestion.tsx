import React from 'react';
import {IQuizQuestionProps} from './QuizQuestion.types'
import { Textarea } from '@/components';
import classes from './QuizQuestion.cn';
import './QuizQuestion.scss';

export const QuizQuestion = ({
	question,
	options,
	timer,
	score,
	}: IQuizQuestionProps) => {

	const styles = classes();

	return (
		<div className={styles.block}>
			<div className={styles.elementQuizContainer}>
				<span className={styles.elementScorePlus}>+{score}</span>
				<span className={styles.elementScoreMinus}>-{score}</span>
			</div>

			<h2 className={styles.elementQuestion}>{question}</h2>

			<div className={styles.elementOptionsContainer}>
				{options ? (
					options.map((option, index) => (
						<button
							key={index}
							className={styles.elementOptionButton}
						>
							{option}
						</button>
					))
				) : (
					<Textarea className={styles.elementInput}/>
				)}
			</div>

			<div className={styles.elementTimerContainer}>
				<span className={styles.elementTimer}>{timer}</span>
			</div>
		</div>
	);
};
