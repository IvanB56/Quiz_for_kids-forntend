import {fetcher} from "@/shared/api/swr/fetcher";
import useSWR from "swr";

export const getUser = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data, error, isLoading } = useSWR(`api/user`, fetcher)
	return {data, error, isLoading};
}