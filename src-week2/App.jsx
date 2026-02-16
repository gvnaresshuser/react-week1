import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./concepts/09-protected-route";
import { useState } from "react";

export default function App() {
  // Simple auth state for demo
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard setIsAuth={setIsAuth} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
