import { useState } from "react";
import { useCart } from "../context/CartContext";
import API from "../api";
import Swal from "sweetalert2";

export default function Checkout({ setPage }) {
    const { total } = useCart();
    const [address, setAddress] = useState("");

    const handlePayment = async () => {
        // 🔹 Address Validation
        if (!address.trim()) {
            return Swal.fire({
                icon: "warning",
                title: "Address Required",
                text: "Please enter your delivery address before proceeding.",
            });
        }

        try {
            // 🔹 Show loading while creating order
            Swal.fire({
                title: "Processing Payment...",
                text: "Please wait while we connect to Razorpay",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });

            const { data } = await API.post("/orders/create", {
                amount: total,
            });

            Swal.close();

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: "INR",
                order_id: data.id,

                handler: async function (response) {
                    try {
                        Swal.fire({
                            title: "Verifying Payment...",
                            allowOutsideClick: false,
                            didOpen: () => Swal.showLoading(),
                        });

                        await API.post("/orders/save", {
                            ...response,
                            address,
                            total,
                        });

                        Swal.fire({
                            icon: "success",
                            title: "Payment Successful 🎉",
                            text: "Redirecting to your orders...",
                            timer: 1500,
                            showConfirmButton: false,
                        }).then(() => {
                            setPage("orders"); // 🔥 Redirect here
                        });

                    } catch (error) {
                        Swal.fire({
                            icon: "error",
                            title: "Payment Verification Failed",
                            text: "Something went wrong while saving your order.",
                        });
                    }
                },

                modal: {
                    ondismiss: function () {
                        Swal.fire({
                            icon: "info",
                            title: "Payment Cancelled",
                            text: "You cancelled the payment process.",
                        });
                    },
                },
            };

            const razor = new window.Razorpay(options);
            razor.open();

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Order Creation Failed",
                text: "Unable to initiate payment. Please try again.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10">

            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

                <h1 className="text-2xl font-bold mb-6 dark:text-white">
                    Checkout
                </h1>

                <textarea
                    placeholder="Enter Delivery Address"
                    className="border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-4 w-full rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold dark:text-gray-300">
                        Total Amount
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                        ₹ {total}
                    </span>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-green-600 hover:bg-green-700 active:scale-95 transition-all text-white py-3 rounded-xl text-lg font-semibold shadow-md"
                >
                    Pay Securely
                </button>

            </div>
        </div>
    );
}
