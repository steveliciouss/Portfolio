export default function Certifications({ darkMode }) {
  const certs = [
    "Responsive Web Design",
    "JavaScript Algorithms",
    "Laravel Fundamentals",
    "React Essentials",
  ];

  return (
    <div className={`rounded-3xl p-12 shadow-xl transition
      ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}>

      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Certifications
      </h2>

      <div className="flex flex-wrap gap-3">
        {certs.map((c) => (
          <span
            key={c}
            className={`px-4 py-2 rounded-full text-sm
              ${darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"}
            `}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
