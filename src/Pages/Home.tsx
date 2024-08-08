import MainData from "../Components/MainData/MainData";
import SidebarData from "../Components/SidebarData/SidebarData";
import RainImage from "../Assets/Bg/rain.webp";

export default function Home() {
    return (
        <div className="flex justify-center items-stretch min-h-[100vh] px-4 py-4 text-black" style={{backgroundSize: '100%' ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RainImage})`}}>
            <SidebarData/>
            <MainData/>
        </div>
    )
}