import React from 'react';
import { CoinsTotal, Heading, QuizQuestion, CardAnswers, } from '@components';

const Earnings = () => {
	return (
		<>
			<Heading data={{text: "Заработок", tag: 'h1'}}/>
			<QuizQuestion
				question={'В каком году родился А. С. Пушкин?'}
				// options={["1800г", "1825г", "1798г", "1799г"]}
				correctAnswer="1799г"
				timer="01:30"
				score={15}
			/>
			<CoinsTotal cn={{ margin: 'my-[40px]' }}/>
			<CardAnswers
				textData={{text: 'Александр Сергеевич Пушкин — русский поэт, драматург и прозаик. Родился: 6 июня 1799 года, Москва, Российская империя'}}
			>
				<Heading data={{text: 'Правильный ответ ', tag: 'h4'}} cn={{margin: 'mb-2'}}/>
			</CardAnswers>
		</>
	);
};

export default Earnings;
