import { useNavigate } from "react-router-dom";

export default function Home({ setIsAuth }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(true);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Login Page</h1>
                <p className="text-gray-200 mb-6">
                    Click login to access protected dashboard.
                </p>
                <button
                    onClick={handleLogin}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
