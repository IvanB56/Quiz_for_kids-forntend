'use client';
import React, {useEffect} from 'react';
import {CardAnswers, CoinsTotal, Heading, Separator, Text,} from '@components';
import {useSelector} from "react-redux";
import {useAppDispatch} from "@hooks";
import {isTextQuizData} from "@/entities/play/model/types/PlayScheme";
import {fetchCurrentGame, getCurrentGame, QuizQuestion} from "@/features/QuizQuestion";
import {PLAY_STATUS} from "@/shared/constants/PlayMode";

const Earnings = () => {
	const {currentGame, error, isLoading} = useSelector(getCurrentGame);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCurrentGame());
	}, [dispatch]);

	if (isLoading) return 'Загрузка игры';

	if (error) return <Text data={{text: error.message, tag: 'p'}}/>

	return (
		<>
			<div className="flex justify-between items-center">
				<Heading data={{text: "Викторины", tag: 'h1'}}/>
				<CoinsTotal value={0}/>
			</div>
			<Separator className="my-4"/>

			{currentGame && <QuizQuestion currentGame={currentGame}/>}

			{
				isTextQuizData(currentGame) && currentGame?.text_quiz?.note && currentGame?.status !== PLAY_STATUS.EMPTY && (
					<CardAnswers textData={{text: currentGame?.text_quiz?.note, answer: currentGame?.text_quiz?.answer}} >
						<Heading data={{text: 'Правильный ответ ', tag: 'h4'}} cn={{margin: 'mb-2'}}/>
					</CardAnswers>
				)
			}
		</>
	);
};

export default Earnings;
