import { useState } from "react";
import API from "../api";

export default function Register({ setPage }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            await API.post("/auth/register", {
                name: form.name,
                email: form.email,
                password: form.password,
            });

            alert("Registration successful!");
            setPage("login");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-emerald-600">
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-96"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-green-600 dark:text-white">
                    Register 📝
                </h2>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                        {error}
                    </p>
                )}

                <input
                    placeholder="Full Name"
                    className="w-full border p-3 mb-4 rounded-lg"
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 mb-4 rounded-lg"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 mb-4 rounded-lg"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border p-3 mb-6 rounded-lg"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            confirmPassword: e.target.value,
                        })
                    }
                    required
                />

                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
                    Register
                </button>

                <p className="text-center mt-6 text-sm dark:text-white">
                    Already have an account?{" "}
                    <span
                        onClick={() => setPage("login")}
                        className="text-green-600 font-semibold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}
