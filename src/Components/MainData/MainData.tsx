import ForeCast from "../ForecastData/ForecastData";
import HighlightData from "../HighlightData/HighlightData";
import CloudyNight from "../../Assets/Icon/cloudy-night.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interface/ReduxState";

export default function MainData() {

    const data = useSelector((state: ReduxState) => state.forecaste.data);
    
    function uvRange(): string {
        if(data?.currentData?.uv <= 5) return "Low";
        else if(data?.currentData?.uv > 5 && data?.currentData?.uv < 8) return "Moderate";
        else return "High";
    }

    function windRange(): string {
        if(data?.currentData?.wind_kph < 1) return "Calm";
        else if(data?.currentData?.wind_kph <= 5) return "Light Air";
        else if(data?.currentData?.wind_kph <= 11) return "Light Breeze";
        else if(data?.currentData?.wind_kph <= 19) return "Gentle Breeze";
        else if(data?.currentData?.wind_kph <= 28) return "Moderate Breeze";
        else if(data?.currentData?.wind_kph <= 38) return "Fresh Breeze";
        else if(data?.currentData?.wind_kph <= 49) return "Strong Breeze";
        else if(data?.currentData?.wind_kph <= 61) return "Near Gale";
        else if(data?.currentData?.wind_kph <= 74) return "Gale";
        else if(data?.currentData?.wind_kph <= 88) return "Strong Gale";
        else if(data?.currentData?.wind_kph <= 102) return "Storm";
        else if(data?.currentData?.wind_kph <= 117) return "Violent Storm";
        else return "Hurricane";
    }

    function humidityRange(): string {
        if(data?.currentData?.humidity <= 20) return "Very Dry";
        else if(data?.currentData?.humidity <= 40) return "Dry";
        else if(data?.currentData?.humidity <= 60) return "Comfortable";
        else if(data?.currentData?.humidity <= 80) return "Humid";
        else return"Very Humid";
    }

    function visibilityRange(): string {
        if(data?.currentData?.vis_km <= 1) return "Very Poor";
        else if(data?.currentData?.vis_km <= 4) return "Poor";
        else if(data?.currentData?.vis_km <= 10) return "Moderate";
        else if(data?.currentData?.vis_km <= 20) return "Good";
        else return "Excellent";
    }

    function aqiRange(): string {
        if(data?.currentData?.aqi <= 50) return "Good 🙂";
        else if(data?.currentData?.aqi <= 100) return "Moderate 😶";
        else if(data?.currentData?.aqi <= 150) return "Unhealthy for sensitive groups 😷";
        else if(data?.currentData?.aqi <= 200) return "Unhealthy 🤧";
        else if(data?.currentData?.aqi <= 300) return "Very Unhealthy 🤕";
        else return "Hazardous 🤒";
    }

    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    return (
        <div className="basis-4/5 flex flex-col px-12 text-xl font-semibold rounded-tr-3xl rounded-br-3xl bg-[#f6f6f8] p-2">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer p-2">Today</div>
                    <div className="cursor-pointer p-2">Week</div>
                </div>
                <div className="flex text-white items-center gap-4">
                    <div className="bg-black px-4 py-3 rounded-[50%] cursor-pointer">&deg;C</div>
                    <div className="bg-black px-4 py-3 rounded-[50%] cursor-pointer">&deg;F</div>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 my-8">
                {
                    data.dayForecaste.map((day) => <ForeCast date={weekDays[(new Date(day.date)).getDay()]} img={CloudyNight} temp={day.avgtemp_c.toString()}/>)
                }
            </div>
            <div>
                <div>Today's Highlight</div>
                <div className="my-8 flex flex-wrap gap-4">
                    <HighlightData title={"UV Index"} value={data?.currentData?.uv} amount={uvRange()}/>
                    <HighlightData title={"Wind Status"} value={data?.currentData?.wind_kph} amount={windRange()}/>
                    <HighlightData title={"Sunrise & Sunset"} value={data?.currentData?.sunrise} amount={data.currentData.sunset}/>
                    <HighlightData title={"Humidity"} value={data?.currentData?.humidity} amount={humidityRange()}/>
                    <HighlightData title={"Visiility"} value={data?.currentData?.vis_km} amount={visibilityRange()}/>
                    <HighlightData title={"Air Quality"} value={data?.currentData?.aqi} amount={aqiRange()}/>
                </div>
            </div>
        </div>
    )
}