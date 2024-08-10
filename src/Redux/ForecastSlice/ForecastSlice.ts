import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ForecasteDataState from "../../Interface/ForecasteDataState";
import axiosInstance from "../../Config/axiosInstance";

const initialState : ForecasteDataState = {
    status: "default",
    data: undefined
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
    try {
        const response = await axiosInstance(`forecast.json?key=${import.meta.env.VITE_API_KEY}&q=Bengaluru&aqi=yes&days=7`);
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
})

const forecasteSlice = createSlice({
    name: "forecaste",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if(!action.payload) return;
            console.log(action);
        })
    }
});

export default forecasteSlice.reducer;