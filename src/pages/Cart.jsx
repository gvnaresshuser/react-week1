import { useCart } from "../context/CartContext";

export default function Cart({ setPage }) {
    const { cart, updateQuantity, total } = useCart();

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">

            <h1 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-white">
                🛒 Your Cart
            </h1>

            {cart.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-300 text-lg">
                    Your cart is empty.
                </div>
            )}

            {cart.map((item) => (
                <div
                    key={item.product_id}
                    className="bg-white dark:bg-gray-800 p-6 mb-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    {/* Product Info */}
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl shadow"
                        />

                        <div>
                            <h2 className="font-bold text-lg dark:text-white">
                                {item.name}
                            </h2>
                            <p className="text-indigo-600 font-semibold mt-1">
                                ₹ {item.price}
                            </p>
                        </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() =>
                                updateQuantity(item.product_id, item.quantity - 1)
                            }
                            className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition"
                        >
                            −
                        </button>

                        <span className="text-lg font-semibold dark:text-white w-8 text-center">
                            {item.quantity}
                        </span>

                        <button
                            onClick={() =>
                                updateQuantity(item.product_id, item.quantity + 1)
                            }
                            className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition"
                        >
                            +
                        </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-lg font-bold text-gray-700 dark:text-white">
                        ₹ {(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            ))}

            {/* Total Section */}
            {cart.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-2xl font-bold dark:text-white">
                        Grand Total: ₹ {total.toFixed(2)}
                    </h2>

                    <button
                        onClick={() => setPage("checkout")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition shadow-md"
                    >
                        Proceed to Checkout →
                    </button>
                </div>
            )}
        </div>
    );
}
