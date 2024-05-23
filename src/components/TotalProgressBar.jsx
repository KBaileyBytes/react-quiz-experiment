export default function TotalProgressBar({ turn, questionCount }) {
    return (
        <div className="relative w-full my-8">
            <progress
                max={questionCount}
                value={turn}
                className="w-full rounded-full h-6"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-bold pb-1">
                {turn} / {questionCount}
            </span>
        </div>   
    )
}