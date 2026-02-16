import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (email, password, confirm) => {
        if (!email || !password || !confirm)
            return alert("All fields are required");

        if (password !== confirm) return alert("Passwords do not match");

        // Mock registration (just login)
        login(email);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
            <div className="space-y-4 text-center">
                <AuthForm type="register" onSubmit={handleRegister} />
                <p className="text-white">
                    Already have an account?{" "}
                    <Link className="font-semibold text-yellow-300" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
