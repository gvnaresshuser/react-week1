import { useEffect, useState } from "react";

export default function UseEffectBasics() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or count changed");
    }, [count]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-4">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center w-full max-w-md">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                    useEffect Basics
                </h2>

                {/* Counter */}
                <div className="mb-6">
                    <p className="text-gray-300 text-sm uppercase tracking-wider">
                        Current Count
                    </p>
                    <p className="text-5xl font-extrabold text-white mt-2 transition-all duration-300">
                        {count}
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={() => setCount(count + 1)}
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold 
                     hover:bg-indigo-700 active:scale-95 transition duration-200 
                     shadow-lg shadow-indigo-500/30"
                >
                    Increase Count 🚀
                </button>

            </div>
        </div>
    );
}
