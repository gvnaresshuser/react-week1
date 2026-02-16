import { useEffect, useState } from "react";
import API from "../api";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await API.get("/orders");
            setOrders(res.data);
        };
        fetch();
    }, []);

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-700 min-h-screen">
            {orders.map((o) => (
                <div
                    key={o.id}
                    className="bg-white dark:bg-gray-800 p-4 mb-4 rounded shadow"
                >
                    <p>Order ID: {o.id}</p>
                    <p>Total: ₹ {o.total_amount}</p>
                    <p>Status: {o.payment_status}</p>
                    <p>Date: {new Date(o.created_at).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}
