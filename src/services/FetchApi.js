import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`
}

const params = { vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc' }
const params2 = { vs_currency: 'usd', days: '15' }
const params3 = { localization: 'true', tickers: 'true', market_data: 'true', community_data: 'true', developer_data: 'true', sparkline: 'false' }

const baseUrl = 'https://coingecko.p.rapidapi.com/'

const createRequest = (url) => ({ url, params, headers: cryptoHeaders })
const createPriceRequest = (url) => ({ url, params: params2, headers: cryptoHeaders })
const createDetsRequest = (url) => ({ url, params: params3, headers: cryptoHeaders })

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoStats: builder.query({
            query: () => createRequest('/coins/markets'),
        }),
        getPriceStats: builder.query({
            query: (id) => createPriceRequest(`/coins/${id}/market_chart`)
        }),
        getDetsStats: builder.query({
            query: (id) => createDetsRequest(`/coins/${id}`)
        })
    }),
})
export const { useGetCryptoStatsQuery, useGetPriceStatsQuery, useGetDetsStatsQuery } = cryptoAPI