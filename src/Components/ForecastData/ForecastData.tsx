interface ForeCastData {
    date: string,
    img: string;
    temp: string
}

export default function ForeCast ({date, img, temp}: ForeCastData) {
    return (
        <div className="bg-white text-lg p-4 rounded-2xl font-medium flex flex-col items-center">
            <div>{date}</div>
            <div>
                <img className="h-16" src={img} />
            </div>
            <div className="flex">
                <div>{temp}</div>
                <div className="font-thin text-base">&deg;C</div>
            </div>
        </div>
    );
}