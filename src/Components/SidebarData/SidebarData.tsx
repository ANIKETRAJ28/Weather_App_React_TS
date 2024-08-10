import { CiSearch } from "react-icons/ci";
import { FaCloud } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import DayImage from "../../Assets/Icon/sunny.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interface/ReduxState";

export default function SidebarData() {

    const currentData = useSelector((state: ReduxState) => state.forecaste.data);

    return (
        <div className="basis-1/5 flex flex-col justify-between rounded-tl-3xl rounded-bl-3xl p-6" style={{background: `rgba(255, 255, 255, 0.815)`}}>
            <div>
                <div className="flex">
                    <input type="text" placeholder="Type here" className="basis-[85%] p-2 rounded-tl-md rounded-bl-md focus:outline-none text-white" />
                    <div className="flex items-center justify-center text-xl p-1 bg-blue-400 rounded-tr-md rounded-br-md cursor-pointer basis-[15%]">
                        <CiSearch/>
                    </div>
                </div>
                <img className="w-[60%] m-4" src={DayImage} alt="" />
                <div className="flex flex-col justify-center pb-4 border-b-2">
                    <div className="flex items-start text-6xl">
                        <div>{currentData.currentData.temp_c}</div>
                        <div className="text-3xl">&deg;C</div>
                    </div>
                    <span>{currentData?.location?.localtime}</span>
                </div>
                <div className="flex flex-col text-[13px] mt-4">
                    <div className="flex gap-2 items-center">
                        <div><FaCloud/></div>
                        <div>{currentData?.dayForecaste[0]?.condition}</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div><BsFillDropletFill/></div>
                        <div>Perc - {currentData?.currentData?.chance_of_rain}%</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div><MdLocationPin/></div>
                <div>{currentData?.location?.name}, {currentData?.location?.region}, {currentData?.location?.country}</div>
            </div>
        </div>
    )
}