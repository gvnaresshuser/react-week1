import { useEffect, useState } from "react";
import API from "../api";
import { FiPackage, FiCalendar, FiCreditCard } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await API.get("/orders");
            setOrders(res.data);
        };
        fetchOrders();
    }, []);

    const getStatusStyle = (status) => {
        if (status === "paid")
            return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300";
        if (status === "pending")
            return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300";
        return "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300";
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10 transition-colors">

            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
                📦 My Orders
            </h1>

            {orders.length === 0 && (
                <div className="flex flex-col items-center justify-center text-center mt-20">
                    <FiPackage size={60} className="text-gray-400 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        No orders yet
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Once you place an order, it will appear here.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {orders.map((o) => (
                    <div
                        key={o.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                    >
                        {/* Order ID */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <FiCreditCard />
                                <span className="text-sm">Order ID</span>
                            </div>
                            <span className="font-semibold text-gray-800 dark:text-white">
                                #{o.id}
                            </span>
                        </div>

                        {/* Total */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <MdOutlinePayments />
                                <span className="text-sm">Total</span>
                            </div>
                            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                                ₹ {o.total_amount}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <FiPackage />
                                <span className="text-sm">Status</span>
                            </div>
                            <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(
                                    o.payment_status
                                )}`}
                            >
                                {o.payment_status}
                            </span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center gap-2">
                                <FiCalendar />
                                <span>Date</span>
                            </div>
                            <span>
                                {new Date(o.created_at).toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
