import { useMemo, useState, useCallback } from "react";

export default function MemoExample() {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-950 px-4">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-center text-white">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6">
                    ⚡ Performance Demo
                </h2>

                {/* Computed Value */}
                <div className="mb-8">
                    <p className="text-gray-300 text-sm uppercase tracking-widest">
                        Expensive Computed Value
                    </p>
                    <p className="text-6xl font-extrabold mt-3 transition-all duration-300">
                        {expensiveCalculation}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">

                    <button
                        onClick={() => setCount(prev => prev + 1)}
                        className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg active:scale-95 transition duration-200"
                    >
                        Increase Count 🚀
                    </button>

                    <button
                        onClick={handleClick}
                        className="py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-semibold shadow-md active:scale-95 transition duration-200"
                    >
                        Trigger Callback
                    </button>

                </div>

                {/* Footer Hint */}
                <p className="mt-6 text-xs text-gray-400">
                    Open console to see when calculation runs.
                </p>

            </div>
        </div>
    );
}
