import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,  //this is to connect the api to the store
    },
});