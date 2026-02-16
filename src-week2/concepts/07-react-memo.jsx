import React, { useState } from "react";

const Child = React.memo(({ name }) => {
    console.log("Child Rendered");

    return (
        <div className="mt-6 p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg transition">
            <h3 className="text-xl font-semibold text-white">
                👶 Hello {name}
            </h3>
            <p className="text-sm text-gray-200 mt-2">
                I only re-render if my props change.
            </p>
        </div>
    );
});

export default function ReactMemoExample() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-center text-white">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6">
                    🚀 React.memo Demo
                </h2>

                {/* Parent Section */}
                <div className="mb-6">
                    <p className="text-gray-300 text-sm uppercase tracking-widest">
                        Parent Count
                    </p>
                    <p className="text-5xl font-extrabold mt-2">
                        {count}
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={() => setCount(prev => prev + 1)}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold shadow-lg active:scale-95 transition duration-200"
                >
                    Re-render Parent 🔄
                </button>

                {/* Divider */}
                <div className="border-t border-white/20 my-6"></div>

                {/* Child Component */}
                <Child name="John" />

                {/* Hint */}
                <p className="mt-6 text-xs text-gray-400">
                    Open console to see when the child re-renders.
                </p>

            </div>
        </div>
    );
}
