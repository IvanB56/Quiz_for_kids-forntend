import {CN} from "@/lib";
import {ISettingsAside} from "@/widgets/SettingsAside/SettingsAside.types";

export default function classes(cn: ISettingsAside['cn']) {
	const BLOCK = CN('settings-aside');

	return {
		block: BLOCK({}, [cn?.margin, cn?.padding]),
		elementLink: BLOCK('link')
	}
}