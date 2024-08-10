import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ForecasteDataState from "../../Interface/ForecasteDataState";
import axiosInstance from "../../Config/axiosInstance";

const initialState : ForecasteDataState = {
    status: "default",
    data: {
        location: {
            name: '',
            region: '',
            country: '',
            localtime: '',
        },
        dayForecaste: [],
        currentData: {
            uv: 0,
            wind_kph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            sunrise: '',
            sunset: '',
            temp_c: 0,
            temp_f: 0,
            is_day: false,
            chance_of_rain: 0,
            hourly: []
        }
    }
};

export const fetchData = createAsyncThunk("data/fetchData", async (data: string) => {
    try {
        const response = await axiosInstance(`forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${data}&aqi=yes&days=7`);
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
        builder
        .addCase(fetchData.fulfilled, (state, action) => {
            if(!action.payload) return;
            console.log(action);
            state.status = "success";
            const {location, forecast, current} = action.payload.data;

            // location
            state.data.location.name = location?.name;
            state.data.location.region = location?.region;
            state.data.location.country = location?.country;
            state.data.location.localtime = location?.localtime;

            // forecast
            state.data.dayForecaste = forecast.forecastday.map((forecastItem: any) => {
                return {
                    date: forecastItem?.date,
                    avgtemp_c: forecastItem.day?.avgtemp_c,
                    avgtemp_f: forecastItem.day?.avgtemp_f,
                    condition: forecastItem.day?.condition?.text,
                }
            });

            // current
            let hourData = forecast?.forecastday[0]?.hour;
            hourData = hourData.map((hr: any) => {
                return {
                    date: hr?.time,
                    avgtemp_c: hr?.temp_c,
                    avgtemp_f: hr?.temp_f,
                    condition: hr?.condition?.text,
                }
            });
            state.data.currentData.hourly = hourData;
            state.data.currentData.aqi = current?.air_quality?.pm2_5;
            state.data.currentData.chance_of_rain = forecast?.forecastday[0]?.day?.daily_chance_of_rain;
            state.data.currentData.humidity = current?.humidity;
            state.data.currentData.is_day = current?.is_day;
            state.data.currentData.sunrise = forecast?.forecastday[0]?.astro?.sunrise;
            state.data.currentData.sunset = forecast?.forecastday[0]?.astro?.sunset;
            state.data.currentData.temp_c = current?.temp_c;
            state.data.currentData.temp_f = current?.temp_f;
            state.data.currentData.uv = current?.uv;
            state.data.currentData.vis_km = current?.vis_km;
            state.data.currentData.wind_kph = current?.wind_kph
        })
        .addCase(fetchData.pending, (state) => {
            state.status = "loading";
        })
    }
});

export default forecasteSlice.reducer;