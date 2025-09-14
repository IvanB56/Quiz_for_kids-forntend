import {CN} from "@/lib";
import { IWalletTable } from './WalletTable.types';

export default function classes(cn: IWalletTable['cn']) {
	const BLOCK = CN('wallet-table');

	return {
		block: BLOCK(),
		elementTitle: BLOCK('title'),
		elementContainer: BLOCK('container'),
		elementFooter: BLOCK('footer'),
		elementFooterLabel: BLOCK('footer-label'),
		elementFooterValue: BLOCK('footer-value'),
	}
}
