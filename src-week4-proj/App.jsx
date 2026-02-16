import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );
  const [page, setPage] = useState("login");

  if (isAuth) {
    return <Dashboard setIsAuth={setIsAuth} />;
  }

  return (
    <>
      {page === "login" ? (
        <Login setIsAuth={setIsAuth} setPage={setPage} />
      ) : (
        <Register setPage={setPage} />
      )}
    </>
  );
}
