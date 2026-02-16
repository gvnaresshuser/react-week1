/*
====================================================
 Day 3: State & Events in React
====================================================

TOPICS COVERED:
1️⃣ What is State?
2️⃣ useState Hook
3️⃣ Event Handling
4️⃣ Controlled Components
5️⃣ Counter App
6️⃣ Simple Form

----------------------------------------------------
1️⃣ WHAT IS STATE?
----------------------------------------------------
• State = data that can change over time
• When state changes, React re-renders the UI
• State makes UI dynamic

----------------------------------------------------
2️⃣ WHAT IS useState?
----------------------------------------------------
• useState is a React Hook
• It returns:
    [currentValue, functionToUpdateValue]

Example:
const [count, setCount] = useState(0);

• count      → current state value
• setCount   → function to update count

----------------------------------------------------
3️⃣ EVENT HANDLING
----------------------------------------------------
• Events are user actions (click, input, submit)
• Event handlers are functions
• Never call the function directly in JSX

✔ onClick={() => setCount(count + 1)}
✖ onClick={setCount(count + 1)}

----------------------------------------------------
4️⃣ CONTROLLED COMPONENTS
----------------------------------------------------
• Input field controlled by React state
• Value comes from state
• Changes update state via onChange
*/

import { useState } from "react";

export default function UseStateEvents() {

    /* --------------------------------------------
       STATE DECLARATIONS
    -------------------------------------------- */

    // Counter state
    const [count, setCount] = useState(0);

    // Form state
    const [name, setName] = useState("");

    /* --------------------------------------------
       EVENT HANDLER FUNCTIONS
    -------------------------------------------- */

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    /* --------------------------------------------
       JSX UI
    -------------------------------------------- */

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 p-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">

                {/* Page Title */}
                <h2 className="text-2xl font-bold text-center text-emerald-600">
                    Day 3: State & Events
                </h2>

                {/* Explanation Box */}
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-sm text-gray-700 space-y-1">
                    <p><b>State:</b> Data that changes over time</p>
                    <p><b>useState:</b> Hook to manage state</p>
                    <p><b>Events:</b> User actions like clicks & typing</p>
                    <p><b>Controlled Input:</b> Input value controlled by state</p>
                </div>

                {/* COUNTER APP */}
                <div className="space-y-3">

                    <h3 className="text-xl font-semibold text-gray-800 text-center">
                        Counter App
                    </h3>

                    <p className="text-center text-lg">
                        Count:
                        <span className="ml-2 font-bold text-emerald-600">
                            {count}
                        </span>
                    </p>

                    <div className="flex justify-center gap-4">

                        <button
                            onClick={decreaseCount}
                            className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 active:scale-95 transition"
                        >
                            Decrease
                        </button>

                        <button
                            onClick={increaseCount}
                            className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 active:scale-95 transition"
                        >
                            Increase
                        </button>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* SIMPLE FORM */}
                <div className="space-y-3">

                    <h3 className="text-xl font-semibold text-gray-800">
                        Simple Form (Controlled Input)
                    </h3>

                    <label className="block text-gray-700 font-medium">
                        Enter Name
                    </label>

                    <input
                        type="text"
                        placeholder="Type your name..."
                        value={name}
                        onChange={handleNameChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    />

                    <p className="text-gray-700">
                        Typed Name:
                        <span className="ml-2 font-semibold text-emerald-600">
                            {name || "—"}
                        </span>
                    </p>

                </div>

            </div>
        </div>
    );
}
