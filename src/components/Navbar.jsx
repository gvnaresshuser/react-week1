import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ setPage, logout }) {
    const { cart } = useCart();
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Sync with actual DOM class on mount
    useEffect(() => {
        const html = document.documentElement;
        setIsDark(html.classList.contains("dark"));
    }, []);

    const toggleDark = () => {
        const html = document.documentElement;
        html.classList.toggle("dark");

        const darkActive = html.classList.contains("dark");
        setIsDark(darkActive);

        localStorage.setItem("theme", darkActive ? "dark" : "light");
    };

    return (
        <div className="bg-indigo-600 dark:bg-gray-900 text-white p-4 shadow-md relative transition-colors">
            <div className="flex justify-between items-center">
                <h1
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => setPage("products")}
                >
                    Week5 Store 🛒
                </h1>

                {/* Desktop */}
                <div className="hidden md:flex gap-6 items-center">
                    <button onClick={() => setPage("products")} className="hover:underline">
                        Products
                    </button>

                    <button onClick={() => setPage("orders")} className="hover:underline">
                        Orders
                    </button>

                    <button onClick={() => setPage("cart")} className="hover:underline">
                        Cart ({cart.length})
                    </button>

                    <button
                        onClick={toggleDark}
                        className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-800 transition"
                    >
                        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>

                    <button
                        onClick={logout}
                        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 flex flex-col gap-4 bg-indigo-700 dark:bg-gray-800 p-4 rounded-lg">
                    <button
                        onClick={() => {
                            setPage("products");
                            setOpen(false);
                        }}
                        className="text-left"
                    >
                        Products
                    </button>

                    <button
                        onClick={() => {
                            setPage("orders");
                            setOpen(false);
                        }}
                        className="text-left"
                    >
                        Orders
                    </button>

                    <button
                        onClick={() => {
                            setPage("cart");
                            setOpen(false);
                        }}
                        className="text-left"
                    >
                        Cart ({cart.length})
                    </button>

                    <button
                        onClick={() => {
                            toggleDark();
                            setOpen(false);
                        }}
                        className="text-left"
                    >
                        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>

                    <button
                        onClick={() => {
                            logout();
                            setOpen(false);
                        }}
                        className="bg-red-500 px-3 py-2 rounded"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
