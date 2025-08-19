'use client';

import React, { useState } from 'react';
import './CheckboxWithLabel.scss';
import type { ICheckboxWithLabel, ICheckboxWithLabelControlled, ICheckboxWithLabelUncontrolled } from './CheckboxWithLabel.types';
import classes from './CheckboxWithLabel.cn';

// для определения режима
function isControlled(props: ICheckboxWithLabel): props is ICheckboxWithLabelControlled {
  return 'checked' in props && 'onChange' in props;
}

export function CheckboxWithLabel(props: ICheckboxWithLabel) {
	const {cn} = props;
	const styles = classes({...cn});

  // Контролируемый режим (внешнее состояние)
  if (isControlled(props)) {
    return (
      <label className={styles.block}>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={e => props.onChange(e.target.checked)}
        />
        <span className={styles.elementBox}/>
        <span className={styles.elementLabel}>{props.label}</span>
      </label>
    );
  }

  // Неконтролируемый режим (внутреннее состояние)
  const [isChecked, setIsChecked] = useState(props.defaultChecked ?? false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    props.onToggle?.(checked, props.label);
  };

  return (
    <label className={styles.block}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => handleChange(e.target.checked)}
      />
      <span className={styles.elementBox}/>
      <span className={styles.elementLabel}>{props.label}</span>
    </label>
  );
}
