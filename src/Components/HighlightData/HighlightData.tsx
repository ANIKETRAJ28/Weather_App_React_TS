interface HighlightDataProps {
    title: string;
    value: number;
    amount: string;
}

export default function HighlightData({ title, value, amount }: HighlightDataProps) {
    return (
        <div className="bg-white w-80 h-44 flex flex-col justify-between font-medium text-lg p-4 rounded-2xl">
            <div className="text-gray-300">{title}</div>
            <div className="text-3xl font-normal self-center">{value}</div>
            <div className="text-xs font-medium">{amount}</div>
        </div>
    );
}