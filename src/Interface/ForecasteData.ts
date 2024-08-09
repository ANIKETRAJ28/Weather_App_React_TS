import CurrentDayForecaste from "./CurrentDayForcaste";
import DayForecaste from "./Dayforcaste";

export default interface ForecasteData {
    location: {
        name: string,
        region: string,
        country: string,
        localtime: string,
    },
    dayforecaste: DayForecaste[],
    currentData: CurrentDayForecaste
}