import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 px-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-white mb-4">
                    Welcome, {user?.email}
                </h1>
                <p className="text-gray-200 mb-6">This is a protected dashboard.</p>
                <button
                    onClick={logout}
                    className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
