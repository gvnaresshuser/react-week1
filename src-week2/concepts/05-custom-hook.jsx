import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default function CustomHookExample() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-4">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-lg text-white">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6 text-center">
                    🌐 Custom Hook Fetch
                </h2>

                {/* Loading */}
                {loading && (
                    <div className="text-center animate-pulse text-indigo-300">
                        Loading data...
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg text-sm">
                        ❌ {error}
                    </div>
                )}

                {/* Data */}
                {data && (
                    <div className="bg-black/40 rounded-xl p-4 mt-4 overflow-auto">
                        <pre className="text-sm text-green-300 whitespace-pre-wrap">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                )}

            </div>
        </div>
    );
}
