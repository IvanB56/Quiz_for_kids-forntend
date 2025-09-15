import {CN} from '@/lib';
import { ICardText } from './CardText.types';

export default function classes(cn: ICardText['cn']) {
  const BLOCK = CN('card-text');
  return {
    block: BLOCK({
			[`${cn?.background}`]: cn?.background === 'bg-button-hover',
			[`${cn?.width}`]: !!cn?.width,
		}, [cn?.display, cn?.gap, cn?.padding, ]),
		elementContainerCard: BLOCK('container-card'),
		elementWrapperWallet: BLOCK('wrapper-wallet'),
  };
}
