import React from 'react';
import classes from './CardReward.cn';
import './CardReward.scss';
import Image from 'next/image';
import coinImg from '@assets/images/child/coin.webp';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../UI/Button/button';
import { Button, Text } from '@components';

interface CardRewardProps {
  text: string;
  reward: string;
  status?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}

export const CardReward: React.FC<CardRewardProps> = ({ text, reward, status, variant }) => {
  const styles = classes();
  return (
    <div className={styles.block + ' bg-white'}>
      <Text data={{ text, tag: 'span' }} className={styles.text} cn={{ size: 'text-body-1', weight: 'font-medium' }} />
      {status &&
				<Button className={styles.status} type="button" variant={variant}>{status}</Button>
			}
			<Text data={{ text: 'Награда', tag: 'span' }} className={styles.rewardValue} cn={{ size: 'text-body-1', weight: 'font-semibold' }} />
			<Text data={{ text: reward, tag: 'span' }} className={styles.rewardValue} cn={{ size: 'text-body-1', weight: 'font-semibold' }} />
      <span className={styles.coin}><Image src={coinImg} alt="coin" width={70} height={70} /></span>
    </div>
  );
};
