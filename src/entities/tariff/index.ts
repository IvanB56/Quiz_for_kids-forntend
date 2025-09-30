export {tariffReducer, tariffActions} from './model/slice/tariffSlice';
export {getTariffs, getActiveTariff, getError, getIsLoading } from './model/selectors/tariffSelectors';
export type {TariffSchema, Tariff} from './model/types/tariffSchema';