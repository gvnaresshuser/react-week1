import { useState } from "react";
import { useCart } from "../context/CartContext";
import API from "../api";

export default function Checkout() {
    const { total } = useCart();
    const [address, setAddress] = useState("");

    const handlePayment = async () => {
        const { data } = await API.post("/orders/create", {
            amount: total,
        });

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: "INR",
            order_id: data.id,
            handler: async function (response) {
                await API.post("/orders/save", {
                    ...response,
                    address,
                    total,
                });
                alert("Payment Successful!");
                window.location.reload();
            },
        };

        const razor = new window.Razorpay(options);
        razor.open();
    };

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-700 min-h-screen">
            <textarea
                placeholder="Enter Address"
                className="border p-4 w-full rounded mb-4"
                onChange={(e) => setAddress(e.target.value)}
            />

            <h2 className="text-xl font-bold mb-4">
                Total: ₹ {total}
            </h2>

            <button
                onClick={handlePayment}
                className="bg-green-600 text-white px-6 py-3 rounded"
            >
                Pay Now
            </button>
        </div>
    );
}
