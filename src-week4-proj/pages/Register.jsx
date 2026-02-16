import { useState } from "react";
import API from "../api";

export default function Register({ setPage }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/register", form);
            alert("Registration successful! Please login.");
            setPage("login");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-emerald-600">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-2xl shadow-2xl w-96"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
                    Register 📝
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 mb-4 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 mb-6 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    required
                />

                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
                    Register
                </button>

                {/* Link to Login */}
                <p className="text-center mt-6 text-sm">
                    Already have an account?{" "}
                    <span
                        onClick={() => setPage("login")}
                        className="text-green-600 font-semibold cursor-pointer hover:underline"
                    >
                        Login here
                    </span>
                </p>
            </form>
        </div>
    );
}
