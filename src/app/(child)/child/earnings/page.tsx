import React from 'react';
import {CardInstruction} from '@components';
import CardInstruction1 from '@assets/images/child/card-instruction-1.webp';
import CardInstruction2 from '@assets/images/child/card-instruction-2.webp';
import CardInstruction3 from '@assets/images/child/card-instruction-3.webp';

const Earnings = () => {
	return (
		<section>
			<CardInstruction
				data={{
					text: '«Привет! Ты хочешь заработать реальные деньги? Если решишь это сделать, то все будут гордиться тем, что ты зарабатываешь! Давай поговорим как это сделать? Первое задание для тебя: Поделись с друзьями, подругами, знакомыми, одноклассниками этим Приложением «Монетикум», расскажи о том какое оно классное и полезное. Надеюсь, ты уже научился у нас писать стихи, поздравления, музыку при помощи искусственного интеллекта, поделись этим с другими и за каждого ты получишь 250 рублей. Сколько у тебя одноклассников и друзей? (тут делаем простейший калькулятор для ребенка.)',
					image: CardInstruction1
				}}
				cn={{margin: 'mb-[50px]'}}
			/>
			<CardInstruction data={{
				text: ' Теперь подойди к маме и скажи, что ты хочешь зарабатывать. Попроси маму зайти в ее приложение во вкладку «Заработать вместе с ребенком», она подпишет договор, потому что так нужно по закону, а мы должны все его соблюдать. Пока мама это делает, составь список кому будешь предлагать.',
				image: CardInstruction2
			}} cn={{margin: 'mb-[50px]', modifier: 'reverse'}}/>
			<CardInstruction data={{
				text: ' Как только мама все сделает, она даст тебе ссылку, которую ты просто отправишь всем своим знакомым. Если тебе самому лень придумывать и объяснять своим друзьям, то дай задание искусственному интеллекту написать текст или скопируй и отправь этот текст: «Приложение крутое, можно научится писать стихи, песни и многое другое при помощи искусственного интеллекта, можно не клянчить деньги у родителей, а зарабатывать самому и делать это легко.»',
				image: CardInstruction3
			}} cn={{margin: 'mb-[50px]'}}/>
			{/*<SectionWhite className={"mb-2 sm:mb-12"} overflow='overflow-visible'>*/}
			{/*	<Heading data={{text: 'Поделись ссылкой с другом ', tag: 'h4'}} cn={{margin: 'mb-4 sm:mb-9'}}/>*/}
			{/*	<TextWithButton text={'link'} />*/}
			{/*</SectionWhite>*/}
			{/*<SectionWhite overflow='overflow-visible'>*/}
			{/*	<Helper cn={{width: 'full'}}>*/}
			{/*		<Text data={{text: 'Поделившись ссылкой вы или ваш ребенок получит вознаграждение 500 звезд, а так же получит 500 звезд ваш друг, который получит ссылку и купит подписку.', tag: 'p'}}*/}
			{/*					cn={{color: 'text-primary-blue'}} />*/}
			{/*	</Helper>*/}
			{/*</SectionWhite>*/}
		</section>
	);
};

export default Earnings;
