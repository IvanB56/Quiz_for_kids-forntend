'use client';
import React, {memo, useCallback, useEffect, useState} from 'react';
import classes from './QuizQuestion.cn';
import {PLAY_STATUS} from '@/shared/constants/PlayMode';
import {cn} from '@utils';
import {Button, Heading, SectionWhite, Text, Textarea} from "@components";
import {CurrentGame, isQuizData, isTextQuizData, QuizData} from "@/entities/play/model/types/PlayScheme";

import './QuizQuestion.scss';
import {useAppDispatch} from "@hooks";
import {fetchSubmitGame} from "@/features/QuizQuestion/model/services/fetchSubmitGame/fetchSubmitGame";


export const QuizQuestion = memo(({currentGame}: { currentGame: CurrentGame }) => {
	const styles = classes();
	const dispatch = useAppDispatch();
	const [answer, setAnswer] = useState<string>();
	const [question, setQuestion] = useState<string>('');
	const [options, setOptions] = useState<QuizData['quiz']['options']>([]);

	const formSubmit = useCallback((value?: string) => {
		if (currentGame?.status !== PLAY_STATUS.EMPTY) return;

		if (value) {
			dispatch(fetchSubmitGame({answer: value}));
		}

		if (answer) {
			dispatch(fetchSubmitGame({answer}));
		}

	}, [answer, currentGame?.status, dispatch]);

	useEffect(() => {
		if (isQuizData(currentGame)) {
			setQuestion(currentGame.quiz.question);
			setOptions(currentGame.quiz.options);
		}

		if (isTextQuizData(currentGame)) {
			setQuestion(currentGame.text_quiz.question);
			setAnswer(currentGame?.answer_submitted);
		}
	}, [currentGame]);

	return (
		<SectionWhite className={styles.block} overflow="overflow-visible">
			<div className={styles.elementQuizContainer}>
				<Text data={{text: '+15', tag: 'p'}} cn={{size: 'text-body-1'}}
				      className="text-right text-green-500 !font-bold"/>
			</div>
			<Heading data={{text: question, tag: 'h2'}} className={styles.elementQuestion}/>

			<div className={styles.elementOptionsContainer}>
				{
					isQuizData(currentGame) && (
						options?.map((option, index) => (
							<Button
								className={cn(styles.elementOptionButton, {
									success: currentGame.status === PLAY_STATUS.CORRECT && currentGame.option_submitted === index + 1,
									error: currentGame.status === PLAY_STATUS.WRONG && currentGame.option_submitted === index + 1,
								})}
								key={index}
								disabled={currentGame?.status !== PLAY_STATUS.EMPTY}
								onClick={() => {
									formSubmit(String(index + 1));
								}}
							>
								{option}
							</Button>
						))
					)
				}
			</div>
			{
				isTextQuizData(currentGame) && (
					<form noValidate className={styles.elementOptionsContainer}>
						<Textarea
							name="answer"
							value={answer}
							onChange={(e) => setAnswer(e.target.value)}
							placeholder="Напиши свой ответ"
							disabled={currentGame?.status !== PLAY_STATUS.EMPTY}
						/>
						<Button
							type="button"
							onClick={() => formSubmit()}
							disabled={currentGame?.status !== PLAY_STATUS.EMPTY || !answer}
						>
							Проверить ответ
						</Button>
					</form>
				)
			}
		</SectionWhite>
	);
});

QuizQuestion.displayName = 'QuizQuestion';