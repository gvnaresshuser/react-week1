import { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await API.get(`/products?search=${search}`);

                if (Array.isArray(res.data)) {
                    setProducts(res.data);
                } else if (Array.isArray(res.data.products)) {
                    setProducts(res.data.products);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                setProducts([]);
            }
        };

        fetchProducts();
    }, [search]);

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-700 min-h-screen">
            <input
                placeholder="Search..."
                className="border p-2 mb-6 w-full md:w-1/3 rounded"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid md:grid-cols-3 gap-6">
                {Array.isArray(products) &&
                    products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
            </div>
        </div>
    );
}
