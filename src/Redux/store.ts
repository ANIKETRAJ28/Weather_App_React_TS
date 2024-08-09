import { configureStore } from "@reduxjs/toolkit";
import ForecasteReducer from "./ForecastSlice/ForecastSlice";

const store = configureStore({
    reducer: {
        forecaste: ForecasteReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;