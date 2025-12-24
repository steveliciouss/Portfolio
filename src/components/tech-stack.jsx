export default function TechStack({ darkMode }) {
  const stack = ["React","Tailwind","Laravel","MySQL","Node"];

  return (
    <div className={`rounded-3xl p-12 shadow-xl transition
      ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}>

      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-4">
        {stack.map(s => (
          <span key={s} className={`px-5 py-2 rounded-full text-sm shadow
            ${darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
