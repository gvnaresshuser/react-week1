import { useState, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [page, setPage] = useState("login"); // 🔥 start at login
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
      setPage("products"); // go to products if already logged in
    } else {
      setIsAuth(false);
      setPage("login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setPage("login");
  };

  // 🔒 If not authenticated
  if (!isAuth) {
    if (page === "register") {
      return <Register setPage={setPage} />;
    }

    return (
      <Login
        setIsAuth={setIsAuth}
        setPage={setPage}
      />
    );
  }

  // 🔓 If authenticated
  return (
    <CartProvider>
      <Navbar setPage={setPage} logout={logout} />

      {page === "products" && <Products />}
      {page === "cart" && <Cart setPage={setPage} />}
      {/* {page === "checkout" && <Checkout />} */}
      {page === "checkout" && <Checkout setPage={setPage} />}
      {page === "orders" && <Orders />}
    </CartProvider>
  );
}
