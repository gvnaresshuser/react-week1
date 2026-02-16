import { useCart } from "../context/CartContext";
import API from "../api";

export default function ProductCard({ product }) {
    const { fetchCart } = useCart();

    const addToCart = async () => {
        await API.put("/cart/update", {
            productId: product.id,
            quantity: 1,
        });
        fetchCart();
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
            <img src={product.image} className="h-40 w-full object-cover rounded" />
            <h2 className="font-bold mt-2 dark:text-white">{product.name}</h2>
            <p className="text-indigo-600 font-semibold">₹ {product.price}</p>

            <button
                onClick={addToCart}
                className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
}
