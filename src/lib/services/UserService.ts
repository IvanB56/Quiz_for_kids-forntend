import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {UserState} from "@lib/store/features/user/UserSlice";
import {API_URL} from "@/shared/constants";

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: {
			Origin: API_URL,
			Accept: 'application/json',
		},
		credentials: 'include'
	}),
	endpoints: (builder) => ({
		getUser: builder.query<{ data: UserState }, string>({
			query: () => 'api/user',
		}),
	}),
})

export const {useGetUserQuery} = userApi;