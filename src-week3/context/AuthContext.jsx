import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        if (token && email) {
            setUser({ email, token });
        }
    }, []);

    const login = async (email, password) => {
        const res = await axios.post("http://localhost:5000/api/users/login", {
            email,
            password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);

        setUser({ email: res.data.email, token: res.data.token });
    };

    const register = async (name, email, password) => {
        console.log('register name',name);
        console.log('register email', email);
        console.log('register password', password);
        const res = await axios.post("http://localhost:5000/api/users/register", {
            name,
            email,
            password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);

        setUser({ email: res.data.email, token: res.data.token });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setUser(null);
    };

    const value = {
        user,
        login,
        register,
        logout,
        isAuth: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
