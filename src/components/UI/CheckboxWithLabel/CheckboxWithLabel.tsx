'use client';

import React from 'react';
import './CheckboxWithLabel.scss';
import type { ICheckboxWithLabel } from './CheckboxWithLabel.types';
import classes from './CheckboxWithLabel.cn';

export function CheckboxWithLabel(props: ICheckboxWithLabel) {
	const {cn} = props;
	const styles = classes({...cn});

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
