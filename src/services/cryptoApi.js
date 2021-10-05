import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b464772ee2msh7b79d2209af4557p1c26e5jsn6ada53efc10a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',                   //we have to say what is this reducer for
    baseQuery: fetchBaseQuery({ baseUrl }),     //fetchBaseQuery a function which accepts object
    endpoints: (builder) => ({
        getCryptos: builder.query({             //getCryptos-> name of the end point
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({             //getCryptos-> name of the end point
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({             //getCryptos-> name of the end point
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/{timePeriod}`),
        })
    })
})

export const {
    useGetCryptosQuery,    //redux toolkit creates hook so we can call instantly to call all the data, it gives loading states, success states.
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;