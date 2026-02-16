import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-4">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center w-full max-w-md">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-6">
                    🧠 useReducer Counter
                </h2>

                {/* Counter Display */}
                <div className="mb-8">
                    <p className="text-gray-300 text-sm uppercase tracking-widest">
                        Current Value
                    </p>
                    <p className="text-6xl font-extrabold text-white mt-3 transition-all duration-300">
                        {state.count}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mb-4">

                    <button
                        onClick={() => dispatch({ type: "DECREMENT" })}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-xl shadow-lg active:scale-95 transition"
                    >
                        −
                    </button>

                    <button
                        onClick={() => dispatch({ type: "INCREMENT" })}
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xl shadow-lg active:scale-95 transition"
                    >
                        +
                    </button>
                </div>

                {/* Reset Button */}
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                    className="mt-2 px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition active:scale-95 shadow-md"
                >
                    Reset
                </button>

            </div>
        </div>
    );
}
