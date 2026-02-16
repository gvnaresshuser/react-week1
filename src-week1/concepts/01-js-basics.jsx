export default function JsBasics() {

    const course = "React JS";
    let duration = 6;

    const add = (a, b) => a + b;
    const square = n => n * n;

    const student = {
        name: "Naresh",
        age: 22,
        role: "Student",
    };

    const { name, age, role } = student;

    const numbers = [1, 2, 3, 4, 5];
    const [first, second] = numbers;

    const extendedNumbers = [...numbers, 6, 7];

    const sumAll = (...values) =>
        values.reduce((total, num) => total + num, 0);

    const squaredNumbers = numbers.map(n => n * n);
    const evenNumbers = numbers.filter(n => n % 2 === 0);
    const total = numbers.reduce((acc, curr) => acc + curr, 0);

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>Day 1: Modern JavaScript (ES6+)</h2>

            <Section title="let & const">
                <p>Course: <b>{course}</b></p>
                <p>Duration: <b>{duration} weeks</b></p>
            </Section>

            <Section title="Arrow Functions">
                <p>add(2, 3) → <b>{add(2, 3)}</b></p>
                <p>square(4) → <b>{square(4)}</b></p>
            </Section>

            <Section title="Object Destructuring">
                <p>Name: <b>{name}</b></p>
                <p>Age: <b>{age}</b></p>
                <p>Role: <b>{role}</b></p>
            </Section>

            <Section title="Array Destructuring">
                <p>First value: <b>{first}</b></p>
                <p>Second value: <b>{second}</b></p>
            </Section>

            <Section title="Spread Operator">
                <p>{extendedNumbers.join(", ")}</p>
            </Section>

            <Section title="Rest Operator">
                <p>sumAll(1,2,3,4) → <b>{sumAll(1, 2, 3, 4)}</b></p>
            </Section>

            <Section title="Array Methods">
                <p>Squared → {squaredNumbers.join(", ")}</p>
                <p>Even → {evenNumbers.join(", ")}</p>
                <p>Total → <b>{total}</b></p>
            </Section>
        </div>
    );
}

/* 🔹 Reusable Section Component */
function Section({ title, children }) {
    return (
        <div style={styles.section}>
            <h4 style={styles.sectionTitle}>{title}</h4>
            {children}
        </div>
    );
}

/* 🎨 Styles */
const styles = {
    card: {
        maxWidth: "800px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI, sans-serif",
    },
    title: {
        textAlign: "center",
        marginBottom: "25px",
        color: "#2563eb",
    },
    section: {
        marginBottom: "18px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f8fafc",
        border: "1px solid #e5e7eb",
    },
    sectionTitle: {
        marginBottom: "10px",
        color: "#111827",
    },
};
