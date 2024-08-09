import ForecasteData from "./ForecasteData";

export default interface ForecasteDataState {
    status: "default" | "loading" | "success" | "failure",
    data: ForecasteData | undefined
}