import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  const submitProduct = async () => {
    if (!name || !price) return;

    if (editId) {
      await axios.put(`http://localhost:5000/api/products/${editId}`, {
        name,
        price
      });
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/products", {
        name,
        price
      });
    }

    setName("");
    setPrice("");
    fetchProducts();
  };

  const editProduct = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const deleteProduct = async (id) => {
    console.log('id',id);
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Product Management
        </h1>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={submitProduct}
            className={`rounded-lg px-4 py-2 text-white font-medium transition ${editId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {editId ? "Update Product" : "Add Product"}
          </button>
        </div>

        {/* Product List */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No products added
                  </td>
                </tr>
              ) : (
                products.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">₹{p.price}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        onClick={() => editProduct(p)}
                        className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
