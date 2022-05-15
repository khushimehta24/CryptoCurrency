import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '8ebdc8094bmsh0d977148f10dbf0p12a2b3jsnbf63ef4780c1'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoHeaders })

export const cryptoAPI2 = createApi({
    reducerPath: 'cryptoAPI2',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoStats2: builder.query({
            query: () => createRequest('/coins'),
        }),
    }),
})

export const { useGetCryptoStats2Query } = cryptoAPI2