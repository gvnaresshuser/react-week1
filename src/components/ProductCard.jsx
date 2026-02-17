import { useCart } from "../context/CartContext";
import API from "../api";
import Swal from "sweetalert2";

export default function ProductCard({ product }) {
    const { fetchCart } = useCart();

    const addToCart = async () => {
        try {
            // Optional loading state
            Swal.fire({
                title: "Adding to cart...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            await API.put("/cart/update", {
                productId: product.id,
                quantity: 1,
            });

            Swal.close();

            fetchCart();

            // Success Toast (Top Right)
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: `${product.name} added to cart 🛒`,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });

        } catch (error) {
            Swal.close();

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to add product to cart.",
            });
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 group">

            {/* Image Section */}
            <div className="h-44 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback.jpeg";
                    }}
                />
            </div>

            {/* Product Name */}
            <h2 className="font-semibold text-lg text-gray-800 dark:text-white line-clamp-2 min-h-[48px]">
                {product.name}
            </h2>

            {/* Price */}
            <p className="text-indigo-600 dark:text-indigo-400 text-xl font-bold mt-2">
                ₹ {product.price}
            </p>

            {/* Add to Cart Button */}
            <button
                onClick={addToCart}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-200 text-white py-2 rounded-lg font-medium shadow-sm"
            >
                Add to Cart
            </button>
        </div>
    );
}
