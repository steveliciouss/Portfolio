export default function SoftSkills({ darkMode }) {
  const skills = [
    "Communication",
    "Teamwork",
    "Adaptability",
    "Problem Solving",
    "Leadership",
    "Time Management",
  ];

  return (
    <div className={`rounded-3xl p-12 shadow-xl transition
      ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}>

      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Soft Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className={`px-4 py-2 rounded-full text-sm
              ${darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"}
            `}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
