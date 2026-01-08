export default function Education({ darkMode }) {
  return (
    <div
      className={`
        rounded-3xl shadow-xl p-10
        ${darkMode ? "bg-neutral-800/80 text-gray-200 border border-gray-900" : "bg-white text-gray-800 border border-gray-100"}
      `}
    >
      <h3 className="text-2xl font-bold mb-6">Education</h3>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">Bachelor of Science in Information Technology</p>
          <p className="text-sm opacity-70">Ateneo de Naga University — 2022 – Present</p>
        </div>

        <div>
          <p className="font-semibold">Senior High School – Science, Technology, Engineering, & Mathematics (STEM)</p>
          <p className="text-sm opacity-70">St. Bridget School — 2020 – 2022</p>
        </div>
      </div>
    </div>
  );
}
