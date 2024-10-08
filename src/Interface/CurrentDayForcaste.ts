import DayForecaste from "./DayForcaste";

export default interface CurrentDayForecaste {
    uv: number,
    wind_kph: number,
    humidity: number,
    vis_km: number,
    aqi: number,
    sunrise: string,
    sunset: string,
    temp_c: number,
    temp_f: number,
    is_day: boolean,
    chance_of_rain: number,
    hourly: Array<DayForecaste>
}