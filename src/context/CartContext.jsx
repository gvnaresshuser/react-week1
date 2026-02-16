import { createContext, useContext, useEffect, useState } from "react";
import API from "../api";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        try {
            const res = await API.get("/cart");

            if (Array.isArray(res.data)) {
                setCart(res.data);
            } else {
                setCart([]);
            }
        } catch {
            setCart([]);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) fetchCart();
    }, []);

    const updateQuantity = async (id, quantity) => {
        await API.put("/cart/update", { productId: id, quantity });
        fetchCart();
    };

    const total = Array.isArray(cart)
        ? cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        )
        : 0;

    return (
        <CartContext.Provider
            value={{ cart, fetchCart, updateQuantity, total }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
