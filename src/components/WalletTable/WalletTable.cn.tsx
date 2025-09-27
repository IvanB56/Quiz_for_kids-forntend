import {CN} from "@/lib";
import { IWalletTable } from '@/components/WalletTable/WalletTable.types';

export default function classes(cn: IWalletTable['cn']) {
	const BLOCK = CN('wallet-table');

	return {
		block: BLOCK({},
			[cn?.display, cn?.gap, cn?.margin, cn?.padding, cn?.width]),
		elementTitle: BLOCK('title'),
		elementContainer: BLOCK('container'),
		elementFooter: BLOCK('footer'),
		elementFooterLabel: BLOCK('footer-label'),
		elementFooterValue: BLOCK('footer-value'),
	}
}
