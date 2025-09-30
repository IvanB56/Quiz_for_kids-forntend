import {TARIFFS} from "@/shared/constants/tariffs";

export interface Tariff {
	"slug": TARIFFS,
	"name": string,
	"price": string,
	"limits": {
		"max_students": number,
		"max_relatives": number,
		"max_categories": number
	}
}

export interface ActiveTariff {
	"active": boolean,
	"type": Tariff
}

export interface TariffSchema {
	data?: Tariff[];
	isLoading?: boolean;
	error?: string;
	active?: ActiveTariff;
}