import { useState } from "react";

export default function AuthUI() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
                </h2>

                {/* Form */}
                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                    )}

                    <button
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </div>

                {/* Toggle */}
                <p
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-6 text-center text-sm text-gray-600 cursor-pointer hover:text-indigo-600 transition"
                >
                    {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <span className="font-semibold text-indigo-600">
                        {isLogin ? "Register" : "Login"}
                    </span>
                </p>

            </div>
        </div>
    );
}
