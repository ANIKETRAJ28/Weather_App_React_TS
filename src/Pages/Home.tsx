import MainData from "../Components/MainData/MainData";
import SidebarData from "../Components/SidebarData/SidebarData";
import RainImage from "../Assets/Bg/rain.webp";
import { useEffect } from "react";
import { fetchData } from "../Redux/ForecastSlice/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";

export default function Home() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className="flex justify-center items-stretch min-h-[100vh] px-4 py-4 text-black" style={{backgroundSize: '100%' ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RainImage})`}}>
            <SidebarData/>
            <MainData/>
        </div>
    )
}