import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,  //this is to connect the api to the store
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});