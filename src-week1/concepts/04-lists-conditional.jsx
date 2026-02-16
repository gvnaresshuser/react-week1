import { useState } from "react";

export default function ListsConditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const users = ["Naresh", "Ravi", "Anu"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-indigo-600">
                    Lists & Conditional Rendering
                </h2>

                {/* Login Section */}
                <div className="flex flex-col items-center gap-3">
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        className={`px-6 py-2 rounded-lg font-medium text-white transition active:scale-95
              ${isLoggedIn
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-emerald-500 hover:bg-emerald-600"}`}
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>

                    {/* Conditional Message */}
                    {isLoggedIn && (
                        <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium animate-fadeIn">
                            Welcome back! 🎉
                        </span>
                    )}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* User List */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        User List
                    </h3>

                    <ul className="space-y-2">
                        {users.map(user => (
                            <li
                                key={user}
                                className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium shadow-sm hover:bg-indigo-100 transition"
                            >
                                {user}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
/*
| Topic                 | Where it appears    |
| --------------------- | ------------------- |
| Conditional rendering | `&&` and `? :`      |
| Rendering lists       | `users.map()`       |
| key prop              | `key={user.id}`     |
| State-driven UI       | Login / Logout      |
| Dynamic styles        | Button color toggle |

*/