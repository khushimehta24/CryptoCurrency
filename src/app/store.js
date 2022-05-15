import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cryptoAPI } from '../services/FetchApi'
import { NewsApi } from '../services/NewsApi'
import { cryptoAPI2 } from '../services/StatsFetch'

export const store = configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [NewsApi.reducerPath]: NewsApi.reducer,
        [cryptoAPI2.reducerPath]: cryptoAPI2.reducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoAPI.middleware),
})

setupListeners(store.dispatch)