import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Child() {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`mt-6 p-6 rounded-2xl shadow-xl transition-all duration-500
        ${theme === "light"
                    ? "bg-white text-gray-800"
                    : "bg-gray-800 text-white"
                }`}
        >
            <h3 className="text-xl font-semibold">
                Current Theme: {theme.toUpperCase()}
            </h3>
            <p className="mt-2 text-sm opacity-70">
                This component consumes theme from Context API.
            </p>
        </div>
    );
}

export default function UseContextExample() {
    const [theme, setTheme] = useState("light");

    const isLight = theme === "light";

    return (
        <ThemeContext.Provider value={theme}>
            <div
                className={`min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-500
          ${isLight
                        ? "bg-gradient-to-br from-indigo-100 to-purple-200"
                        : "bg-gradient-to-br from-slate-900 to-indigo-950"
                    }`}
            >
                {/* Title */}
                <h2
                    className={`text-3xl font-bold mb-8 transition-colors duration-500
            ${isLight ? "text-gray-800" : "text-white"}`}
                >
                    🌗 Theme Context Demo
                </h2>

                {/* Toggle Button */}
                <button
                    onClick={() =>
                        setTheme(prev => (prev === "light" ? "dark" : "light"))
                    }
                    className={`px-6 py-3 rounded-full font-semibold shadow-lg 
            transition-all duration-300 active:scale-95
            ${isLight
                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                            : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                        }`}
                >
                    Switch to {isLight ? "Dark" : "Light"} Mode
                </button>

                {/* Child Component */}
                <Child />
            </div>
        </ThemeContext.Provider>
    );
}
