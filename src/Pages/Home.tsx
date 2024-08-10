import MainData from "../Components/MainData/MainData";
import SidebarData from "../Components/SidebarData/SidebarData";
import RainImage from "../Assets/Bg/rain.webp";
import { useEffect, useState } from "react";
import { fetchData } from "../Redux/ForecastSlice/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";
import axios from "axios";

export default function Home() {
    const dispatch = useAppDispatch();
    const [city, setCity] = useState<string>("");
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOC_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&`);
            console.log(response);
            setCity(response.data.address.city);
        })
        if(!city) dispatch(fetchData("bengaluru"));
        else dispatch(fetchData(city))
    }, [city]);

    return (
        <div className="flex justify-center items-stretch min-h-[100vh] px-4 py-4 text-black" style={{backgroundSize: '100%' ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RainImage})`}}>
            <SidebarData/>
            <MainData/>
        </div>
    )
}