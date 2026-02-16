import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (email) => {
        setUser({ email });
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
        isAuth: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
