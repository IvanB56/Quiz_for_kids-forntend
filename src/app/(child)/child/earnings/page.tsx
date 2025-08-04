'use client';

import React from 'react';
import { CardReward, Heading, Helper, SectionWhite, Text, TextWithButton, Button, CheckboxWithLabel } from '@components';

const Earnings = () => {
  const [checked, setChecked] = React.useState({
    dishes: true,
    flowers: false,
		clean: true,
		vacuumСleaning: false,
		cleaningRoom: false,
  });

  return (
    <>
      <CardReward text={'Домашнее задание от мамы'} reward={'300'}/>
      <CardReward text={'Домашнее задание от папы'} reward={'500'} status={'выполнено'} variant={'green'}/>
      <CardReward text={'Домашнее задание от бабушки'} reward={'100'} status={'просрочено'} variant={'red'}/>
      <SectionWhite overflow='overflow-visible'>
        <div className="mb-[110]">
          <Text data={{ text: 'Домашнее задание от мамы от ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
          <Text data={{ text: '01.01.2025 ', tag: 'span' }} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
        </div>

				<div>
					<CheckboxWithLabel
						label="вымыть посуду"
						checked={checked.dishes}
						onChange={v => setChecked(prev => ({ ...prev, dishes: v }))}
					/>
					<CheckboxWithLabel
						label="полить цветы"
						checked={checked.flowers}
						onChange={v => setChecked(prev => ({ ...prev, flowers: v }))}
					/>
					<CheckboxWithLabel
						label="убрать со стола"
						checked={checked.clean}
						onChange={v => setChecked(prev => ({ ...prev, clean: v }))}
					/>
					<CheckboxWithLabel
						label="пропылесосить комнату"
						checked={checked.vacuumСleaning}
						onChange={v => setChecked(prev => ({ ...prev, vacuumСleaning: v }))}
					/>
					<CheckboxWithLabel
						label="убраться в комнате "
						checked={checked.cleaningRoom}
						onChange={v => setChecked(prev => ({ ...prev, cleaningRoom: v }))}
					/>
				</div>

        <Helper cn={{width: 'full'}}>
          <Text data={{text: 'здесь ты можешь написать комментарий', tag: 'p'}} />
        </Helper>
        <Button >Выполнить</Button>
      </SectionWhite>
    </>
  );
};

export default Earnings;
