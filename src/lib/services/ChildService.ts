import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URL} from "@/shared/constants";

export const childApi = createApi({
	reducerPath: 'childApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: {
			Origin: API_URL,
			Accept: 'application/json',
		},
		credentials: 'include'
	}),
	endpoints: (builder) => ({
		getChild: builder.query<Array<string>, string>({
			query: () => 'api/students',
		}),
	}),
})

export const {useGetChildQuery} = childApi;