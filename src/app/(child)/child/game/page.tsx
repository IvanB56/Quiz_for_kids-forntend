'use client';
import React, {useCallback, useEffect} from 'react';
import {Button, CardAnswers, Heading, Separator, Text,} from '@components';
import {useSelector} from "react-redux";
import {useAppDispatch} from "@hooks";
import {isTextQuizData} from "@/entities/play/model/types/PlayScheme";
import {fetchCurrentGame, getCurrentGame, QuizQuestion} from "@/features/QuizQuestion";
import {PLAY_STATUS} from "@/shared/constants/PlayMode";
import {CoinsBalance} from "@/features/Coins";
import {fetchGetNewGame} from "@/features/QuizQuestion/model/services/fetchGetNewGame/fetchGetNewGame";
import {PlayActions} from "@/entities/play/model/slice/playSlice";

const Game = () => {
	const {currentGame, error, isLoading} = useSelector(getCurrentGame);
	const dispatch = useAppDispatch();

	const nextGame = useCallback(() => {
		dispatch(PlayActions.setCurrentGame(undefined))
		dispatch(fetchGetNewGame());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCurrentGame());
	}, [dispatch]);

	console.log(currentGame)

	return (
		<>
			<div className="flex justify-between items-center">
				<Heading data={{text: "Викторины", tag: 'h1'}}/>
				<CoinsBalance/>
			</div>
			<Separator className="my-4"/>

		{isLoading && !currentGame && <Text data={{text: 'Загрузка игры', tag: 'p'}}/>}
		{error && <Text data={{text: error.message, tag: 'p'}}/>}
		{
			currentGame && (
				<>
					<QuizQuestion currentGame={currentGame}/>
					<div className="flex mt-10">
						<Button type="button" onClick={nextGame} className="ml-auto">Следующая игра</Button>
					</div>
				</>

			)
		}

			{
				isTextQuizData(currentGame) && currentGame?.text_quiz?.note && currentGame?.status !== PLAY_STATUS.EMPTY && (
					<CardAnswers textData={{text: currentGame?.text_quiz?.note, answer: currentGame?.text_quiz?.answer}}>
						<Heading data={{text: 'Правильный ответ ', tag: 'h4'}} cn={{margin: 'mb-2'}}/>
					</CardAnswers>
				)
			}
		</>
	);
};

export default Game;
