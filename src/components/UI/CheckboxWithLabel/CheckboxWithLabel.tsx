'use client';

import React, { useState } from 'react';
import './CheckboxWithLabel.scss';
import type { ICheckboxWithLabel, ICheckboxWithLabelControlled } from './CheckboxWithLabel.types';
import classes from './CheckboxWithLabel.cn';

// для определения режима
function isControlled(props: ICheckboxWithLabel): props is ICheckboxWithLabelControlled {
  return 'checked' in props && 'onChange' in props;
}

export function CheckboxWithLabel(props: ICheckboxWithLabel) {
	const {cn} = props;
	const styles = classes({...cn});

  // Определяем режим до инициализации хуков
  const controlled = isControlled(props);

  // Всегда инициализируем состояние (хуки должны вызываться всегда)
  const [isChecked, setIsChecked] = useState(
    controlled ? false : (props.defaultChecked ?? false)
  );

  const handleChange = (checked: boolean) => {
    if (controlled) {
      // В контролируемом режиме просто вызываем onChange
      props.onChange(checked);
    } else {
      // В неконтролируемом режиме обновляем внутреннее состояние
      setIsChecked(checked);
      props.onToggle?.(checked, props.label);
    }
  };

  // Определяем текущее значение checked
  const currentChecked = controlled ? props.checked : isChecked;

  return (
    <label className={styles.block}>
			{props.labelBefore && <span className={styles.elementLabel}>{props.labelBefore}</span>}
			<input
        type="checkbox"
        checked={currentChecked}
        onChange={e => handleChange(e.target.checked)}
      />
      <span className={styles.elementBox}/>
			{props.label && <span className={styles.elementLabel}>{props.label}</span>}
    </label>
  );
}
