/*
====================================================
 Day 2: React Basics – Components & Props
====================================================

TOPICS COVERED:
1️⃣ What is React & SPA (Conceptual – explained below)
2️⃣ Vite Setup (How this project was created)
3️⃣ JSX
4️⃣ Components
5️⃣ Props

----------------------------------------------------
1️⃣ WHAT IS REACT?
----------------------------------------------------
• React is a JavaScript library for building UI
• It is component-based
• UI updates automatically when data changes

----------------------------------------------------
2️⃣ WHAT IS SPA?
----------------------------------------------------
• SPA = Single Page Application
• Page does NOT reload
• Only required UI parts update
• Faster & smoother UX (React, Angular, Vue)

----------------------------------------------------
3️⃣ VITE SETUP (Already done)
----------------------------------------------------
npm create vite@latest react-week1-fundamentals
cd react-week1-fundamentals
npm install
npm run dev

----------------------------------------------------
Below starts ACTUAL REACT CODE
----------------------------------------------------
*/


/* ==================================================
   PROFILE CARD COMPONENT (Reusable Child Component)
   ==================================================

   🔹 This is a FUNCTIONAL COMPONENT
   🔹 Receives data using PROPS
   🔹 Props are read-only
*/

function ProfileCard({ name, role }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition border border-gray-100">

            <div className="flex items-center gap-4">

                {/* Avatar (First letter from name) */}
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    {name.charAt(0)}
                </div>

                {/* User Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {name}
                    </h3>

                    <p className="text-gray-500">
                        Role:
                        <span className="font-medium text-gray-700 ml-1">
                            {role}
                        </span>
                    </p>
                </div>

            </div>
        </div>
    );
}


/* ==================================================
   MAIN COMPONENT (Parent Component)
   ==================================================

   🔹 Uses ProfileCard multiple times
   🔹 Demonstrates COMPONENT REUSE
   🔹 Passes PROPS to child component
*/

export default function ComponentsProps() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-6">

            <div className="max-w-3xl mx-auto space-y-6">

                {/* Page Title */}
                <h2 className="text-2xl font-bold text-center text-indigo-600">
                    Day 2: React Basics – Components & Props
                </h2>

                {/* Explanation Box */}
                <div className="bg-white p-4 rounded-lg shadow-sm text-gray-700 text-sm leading-relaxed">
                    <p>
                        <b>Component:</b> A reusable piece of UI built using a function.
                    </p>
                    <p>
                        <b>Props:</b> Data passed from parent component to child component.
                    </p>
                    <p className="mt-2">
                        React uses <b>JSX</b> which looks like HTML but works inside JavaScript.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-4 sm:grid-cols-2">

                    {/* Passing PROPS */}
                    <ProfileCard name="Naresh" role="Student" />
                    <ProfileCard name="Ravi" role="Developer" />

                </div>

            </div>
        </div>
    );
}
