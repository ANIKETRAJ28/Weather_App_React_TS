import { createSlice } from "@reduxjs/toolkit";
import ForecasteDataState from "../../Interface/ForecasteDataState";

const initialState : ForecasteDataState = {
    status: "default",
    data: undefined
};

const forecasteSlice = createSlice({
    name: "forecaste",
    initialState,
    reducers: {},
    extraReducers: () => {}
});

export default forecasteSlice.reducer;