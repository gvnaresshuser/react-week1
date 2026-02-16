import { useState } from "react";

export default function AuthForm({ type, onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-white mb-6">
                {type === "login" ? "Login" : "Register"}
            </h2>

            {type === "register" && (
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            )}

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {type === "register" && (
                <input
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 mb-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            )}

            <button
                onClick={() =>
                    onSubmit(
                        type === "register" ? name : null,
                        email,
                        password,
                        confirm
                    )
                }
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-white transition"
            >
                {type === "login" ? "Login" : "Register"}
            </button>
        </div>
    );
}
