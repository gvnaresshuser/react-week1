import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (name, email, password) => {
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
            <div className="space-y-4 text-center">
                <AuthForm type="login" onSubmit={handleLogin} />
                <p className="text-white">
                    Don't have an account?{" "}
                    <Link className="font-semibold text-yellow-300" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
