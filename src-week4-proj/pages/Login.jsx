import { useState } from "react";
import API from "../api";

export default function Login({ setIsAuth, setPage }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", form);
            localStorage.setItem("token", res.data.token);
            setIsAuth(true);
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-2xl shadow-2xl w-96"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
                    Login 🔐
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 mb-4 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 mb-6 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    required
                />

                <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
                    Login
                </button>

                {/* Link to Register */}
                <p className="text-center mt-6 text-sm">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => setPage("register")}
                        className="text-indigo-600 font-semibold cursor-pointer hover:underline"
                    >
                        Register here
                    </span>
                </p>
            </form>
        </div>
    );
}
