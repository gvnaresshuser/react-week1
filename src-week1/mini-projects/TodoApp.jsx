/*
====================================================
 Day 5: Week-1 Mini Project – Todo App
====================================================

FEATURES IMPLEMENTED:
1️⃣ Add Todo
2️⃣ Delete Todo
3️⃣ Mark Todo as Completed
4️⃣ Conditional Rendering
5️⃣ Lists with key prop
6️⃣ Tailwind CSS (Intro)

----------------------------------------------------
WHY THIS PROJECT?
----------------------------------------------------
• Combines ALL Week-1 concepts
• Real-world example
• Resume-friendly
• Builds confidence
*/

import { useState } from "react";

export default function TodoApp() {

    /* --------------------------------------------
       STATE
    -------------------------------------------- */

    // Controlled input state
    const [task, setTask] = useState("");

    // Todos stored as objects (BEST PRACTICE)
    const [todos, setTodos] = useState([]);

    /* --------------------------------------------
       ADD TODO
    -------------------------------------------- */

    const addTodo = () => {
        if (!task.trim()) return;

        const newTodo = {
            id: Date.now(),      // unique key
            text: task,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setTask("");
    };

    /* --------------------------------------------
       TOGGLE COMPLETE
    -------------------------------------------- */

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    /* --------------------------------------------
       DELETE TODO
    -------------------------------------------- */

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    /* --------------------------------------------
       JSX UI
    -------------------------------------------- */

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100 p-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">

                {/* Title */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-rose-600">
                        📝 Todo App
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Week-1 Mini Project (React Fundamentals)
                    </p>
                </div>

                {/* Tailwind Intro Info */}
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-sm text-gray-700">
                    <p><b>Tailwind CSS:</b> Utility-first CSS framework</p>
                    <p>Styles are applied directly using className</p>
                </div>

                {/* Input Section (Controlled Component) */}
                <div className="flex gap-2">
                    <input
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
                    />

                    <button
                        onClick={addTodo}
                        className="px-4 py-2 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 active:scale-95 transition"
                    >
                        Add
                    </button>
                </div>

                {/* Conditional Rendering */}
                {todos.length === 0 && (
                    <p className="text-center text-gray-400">
                        No tasks added yet 🚀
                    </p>
                )}

                {/* Todo List */}
                <ul className="space-y-3">

                    {todos.map(todo => (
                        <li
                            key={todo.id} // ⭐ key prop
                            className="flex items-center justify-between px-4 py-2 rounded-lg bg-rose-50 border border-rose-100 shadow-sm"
                        >

                            {/* Todo Text */}
                            <span
                                onClick={() => toggleComplete(todo.id)}
                                className={`cursor-pointer font-medium
                                    ${todo.completed
                                        ? "line-through text-gray-400"
                                        : "text-gray-700"
                                    }`}
                            >
                                {todo.text}
                            </span>

                            {/* Delete Button */}
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-500 hover:text-red-700 transition"
                                title="Delete task"
                            >
                                ❌
                            </button>

                        </li>
                    ))}

                </ul>

            </div>
        </div>
    );
}
