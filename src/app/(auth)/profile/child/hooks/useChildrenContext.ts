import {useContext} from "react";
import {ChildContext} from "@/app/(auth)/profile/child/helpers/provider";

export function useChildrenContext() {
	const context = useContext(ChildContext);

	if (!context) {
		throw "Контекст ChildContext не доступен"
	}

	return {
		...context
	}
}