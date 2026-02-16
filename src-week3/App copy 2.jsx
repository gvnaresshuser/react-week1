import JsBasics from "./concepts/01-js-basics";
import ComponentsProps from "./concepts/02-components-props";
import UseStateEvents from "./concepts/03-useState-events";
import ListsConditional from "./concepts/04-lists-conditional";
import TodoApp from "./mini-projects/TodoApp";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-6">

      {/* Page Header */}
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600">
          React Week-1 Fundamentals
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Learn React basics with hands-on mini projects 🚀
        </p>
      </header>

      {/* Content Sections */}
      <main className="max-w-6xl mx-auto space-y-12">

        {/* Section Wrapper */}
       {/*  <section className="bg-white rounded-2xl shadow-lg p-6">
          <JsBasics />
        </section> */}

        {/* <section className="bg-white rounded-2xl shadow-lg p-6">
          <ComponentsProps />
        </section> */}

        {/* <section className="bg-white rounded-2xl shadow-lg p-6">
          <UseStateEvents />
        </section> */}

       {/*  <section className="bg-white rounded-2xl shadow-lg p-6">
          <ListsConditional />
        </section> */}

        {/* Mini Project Highlight */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 rounded-2xl shadow-xl p-6">
          <TodoApp />
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © {new Date().getFullYear()} React Training • Week-1
      </footer>

    </div>
  );
}
