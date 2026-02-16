import { useEffect, useState } from "react";

export default function UseEffectCleanup() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Cleanup called");
        };
    }, [isRunning]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 px-4">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center w-full max-w-md">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                    ⏱ Timer
                </h2>

                {/* Time Display */}
                <div className="mb-8">
                    <p className="text-gray-300 text-sm uppercase tracking-widest">
                        Elapsed Seconds
                    </p>
                    <p className="text-6xl font-extrabold text-white mt-3 transition-all duration-300">
                        {time}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">

                    <button
                        onClick={() => setIsRunning(!isRunning)}
                        className={`px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-lg 
              ${isRunning
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-green-500 hover:bg-green-600 text-white"
                            } active:scale-95`}
                    >
                        {isRunning ? "Pause" : "Start"}
                    </button>

                    <button
                        onClick={() => setTime(0)}
                        className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition duration-200 active:scale-95 shadow-md"
                    >
                        Reset
                    </button>

                </div>

            </div>
        </div>
    );
}
