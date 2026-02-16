import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(`${API}/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post(API, form);
    }

    setForm({ name: "", price: "", image: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">
          PERN Store – Week 4 🚀
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-10 grid md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {editingId ? "Update" : "Add"} Product
          </button>
        </form>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/300x200.png?text=No+Image"
                }
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">
                  {product.name}
                </h2>

                <p className="text-indigo-600 font-bold text-lg mb-4">
                  ₹ {product.price}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
