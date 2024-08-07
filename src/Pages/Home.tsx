import MainData from "../Components/MainData/MainData";
import SidebarData from "../Components/SidebarData/SidebarData";
import RainImage from "../Assets/rain.webp";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-[100vh]" style={{backgroundSize: '100%' ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RainImage})`}}>
            <div className="flex justify-center items-center h-[90%] w-[90%] text-black">
                <SidebarData/>
                <MainData/>
            </div>
        </div>
    )
}