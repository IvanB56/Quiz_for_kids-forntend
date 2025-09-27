import {CN} from '@/lib';
import { ICardWallet } from './CardWallet.types';

export default function classes(cn: ICardWallet['cn']) {
  const BLOCK = CN('card-wallet');
  return {
    block: BLOCK({}, [cn?.display, cn?.gap, cn?.padding, cn?.width, cn?.direction]),
		elementContainerCard: BLOCK('container-card'),
		elementWrapperWallet: BLOCK('wrapper-wallet'),
		elementInput: BLOCK('input'),
		elementWrapperDailyEarnings: BLOCK('wrapper-daily-earnings'),
		elementDailyEarnings: BLOCK('daily-earnings'),
		elementWrapperTotalWallet: BLOCK('wrapper-total-wallet'),
		elementTotalWallet: BLOCK('total-wallet'),
		elementWrapperTextRequest: BLOCK('wrapper-text-request'),
  };
}
