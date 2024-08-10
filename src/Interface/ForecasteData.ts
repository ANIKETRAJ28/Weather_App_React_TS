import CurrentDayForecaste from "./CurrentDayForcaste";
import DayForecaste from "./DayForcaste";

export default interface ForecasteData {
    location: {
        name: string,
        region: string,
        country: string,
        localtime: string,
    },
    dayForecaste: DayForecaste[],
    currentData: CurrentDayForecaste
}