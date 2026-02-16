import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard({ setIsAuth }) {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        price: "",
        image: "",
    });
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await API.get(
            `/products?page=${page}&search=${search}`
        );
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, [page, search]);

    // ADD OR UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            await API.put(`/products/${editingId}`, form);
            setEditingId(null);
        } else {
            await API.post("/products", form);
        }

        setForm({ name: "", price: "", image: "" });
        fetchProducts();
    };

    const handleDelete = async (id) => {
        await API.delete(`/products/${id}`);
        fetchProducts();
    };

    const handleEdit = (product) => {
        setForm({
            name: product.name,
            price: product.price,
            image: product.image,
        });
        setEditingId(product.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setForm({ name: "", price: "", image: "" });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-indigo-600">
                    Dashboard 🚀
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>
            </div>

            {/* Add / Edit Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md mb-8 grid md:grid-cols-4 gap-4"
            >
                <input
                    placeholder="Product Name"
                    className="border p-2 rounded"
                    value={form.name}
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                    required
                />

                <input
                    placeholder="Price"
                    type="number"
                    className="border p-2 rounded"
                    value={form.price}
                    onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                    }
                    required
                />

                <input
                    placeholder="Image URL"
                    className="border p-2 rounded"
                    value={form.image}
                    onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                    }
                />

                <div className="flex gap-2">
                    <button
                        className={`flex-1 text-white rounded ${editingId
                                ? "bg-yellow-500 hover:bg-yellow-600"
                                : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                    >
                        {editingId ? "Update" : "Add"}
                    </button>

                    {editingId && (
                        <button
                            type="button"
                            onClick={cancelEdit}
                            className="flex-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* Search */}
            <input
                placeholder="Search product..."
                className="mb-6 border p-3 rounded w-full md:w-1/3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Product Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition"
                    >
                        <img
                            src={
                                p.image ||
                                "https://via.placeholder.com/300x200?text=No+Image"
                            }
                            className="h-40 w-full object-cover rounded-t-xl"
                        />

                        <div className="p-4">
                            <h3 className="font-bold text-lg">{p.name}</h3>
                            <p className="text-indigo-600 font-semibold mb-4">
                                ₹ {p.price}
                            </p>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleEdit(p)}
                                    className="bg-yellow-400 px-3 py-2 rounded hover:bg-yellow-500"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(p.id)}
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-300 px-4 py-2 rounded"
                >
                    Prev
                </button>

                <span className="px-4 py-2 bg-indigo-600 text-white rounded">
                    Page {page}
                </span>

                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="bg-gray-300 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
