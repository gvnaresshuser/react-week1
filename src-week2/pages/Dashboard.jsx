export default function Dashboard({ setIsAuth }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Protected Dashboard</h1>
                <p className="text-gray-200 mb-6">
                    You are logged in.
                </p>
                <button
                    onClick={() => setIsAuth(false)}
                    className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
