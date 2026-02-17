import { useCart } from "../context/CartContext";

export default function Cart({ setPage }) {
    const { cart, updateQuantity, total } = useCart();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10 transition-colors">

            {/* Page Header */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
                🛒 Shopping Cart
            </h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <div className="text-6xl mb-4">🛍️</div>
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Your cart is empty
                    </h2>
                    <button
                        onClick={() => setPage("products")}
                        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
                    >
                        Continue Shopping
                    </button>
                </div>
            )}

            {cart.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT SIDE – CART ITEMS */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.product_id}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-between gap-4 p-4"
                            >
                                {/* Product Image - Bigger */}
                                <div className="w-36 h-36 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/fallback.jpeg";
                                        }}
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col justify-between flex-1 h-36">
                                    <div>
                                        <h2 className="font-semibold text-lg dark:text-white">
                                            {item.name}
                                        </h2>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                                            ₹ {item.price}
                                        </p>
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="flex items-center justify-between">

                                        {/* Quantity Controls - Compact */}
                                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.product_id, item.quantity - 1)
                                                }
                                                className="w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-md flex items-center justify-center text-sm transition"
                                            >
                                                −
                                            </button>

                                            <span className="font-semibold dark:text-white w-6 text-center">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.product_id, item.quantity + 1)
                                                }
                                                className="w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center text-sm transition"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Subtotal */}
                                        <div className="text-right min-w-[110px] whitespace-nowrap">
                                            <span className="text-gray-500 dark:text-gray-400 text-sm block md:hidden">
                                                Total
                                            </span>
                                            <span className="text-lg font-bold text-gray-800 dark:text-white">
                                                ₹ {(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* RIGHT SIDE – ORDER SUMMARY */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-fit sticky top-10">
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3 text-gray-600 dark:text-gray-300">
                            <span>Items</span>
                            <span>{cart.length}</span>
                        </div>

                        <div className="flex justify-between mb-3 text-gray-600 dark:text-gray-300">
                            <span>Total</span>
                            <span>₹ {total.toFixed(2)}</span>
                        </div>

                        <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>

                        <div className="flex justify-between text-xl font-bold dark:text-white">
                            <span>Grand Total</span>
                            <span>₹ {total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => setPage("checkout")}
                            className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white py-3 rounded-xl text-lg font-semibold shadow-md"
                        >
                            Proceed to Checkout →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
