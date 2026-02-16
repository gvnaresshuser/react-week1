import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function NavLink({ to, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`px-4 py-2 rounded-md font-medium transition ${isActive
                    ? "bg-white text-indigo-600 shadow-md"
                    : "text-white hover:bg-white/20"
                }`}
        >
            {children}
        </Link>
    );
}

function Home() {
    return (
        <div className="text-white">
            <h2 className="text-3xl font-bold">Home</h2>
            <p className="mt-2 text-gray-200">
                Welcome to the home page.
            </p>
        </div>
    );
}

function About() {
    return (
        <div className="text-white">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-2 text-gray-200">
                This is a simple React Router example.
            </p>
        </div>
    );
}

export default function RouterExample() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex flex-col">

                {/* Navbar */}
                <nav className="w-full max-w-3xl mx-auto flex justify-center gap-4 mt-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>

                {/* Page Content */}
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
/*
npm install react-router-dom

Install Types (if you're using TypeScript)
npm install -D @types/react-router-dom

*/