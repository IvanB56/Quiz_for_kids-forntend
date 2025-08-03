import {CN} from '@/lib';

export default function classes() {
  const BLOCK = CN('card-reward');
  return {
    block: BLOCK(),
    text: BLOCK('text'),
    status: BLOCK('status'),
    rewardLabel: BLOCK('reward-label'),
    rewardValue: BLOCK('reward-value'),
    coin: BLOCK('coin'),
  };
} 