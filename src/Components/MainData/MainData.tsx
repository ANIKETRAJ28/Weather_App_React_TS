import ForeCast from "../ForecastData/ForecastData";
import HighlightData from "../HighlightData/HighlightData";
import CloudyNight from "../../Assets/Icon/cloudy-night.png";

export default function MainData() {
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
                <ForeCast date="00:00:00 AM" img={CloudyNight} temp="0"/>
            </div>
            <div>
                <div>Today's Highlight</div>
                <div className="my-8 flex flex-wrap gap-4">
                    <HighlightData title={"UV Index"} value={3.5} amount={"Low"}/>
                </div>
            </div>
        </div>
    )
}