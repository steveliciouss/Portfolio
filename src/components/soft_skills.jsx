export default function SoftSkills({ darkMode }) {
  const skills = [
    "Team collaboration",
    "Active listening",
    "Time-management",
    "Task collaboration",
    "Deadline management",
  ];

  return (
    <div className={`rounded-3xl p-12 shadow-xl
      ${darkMode ? "bg-neutral-800/80 border border-gray-900" : "bg-white border border-gray-100"}`}>

      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Soft Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className={`px-4 py-2 rounded-full text-sm shadow-sm
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
