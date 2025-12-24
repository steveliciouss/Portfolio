export default function Education({ darkMode }) {
  return (
    <div
      className={`
        rounded-3xl shadow-xl p-10
        transition-colors duration-500
        ${darkMode ? "bg-neutral-800/80 text-gray-200" : "bg-white text-gray-800"}
      `}
    >
      <h3 className="text-2xl font-bold mb-6">Education</h3>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">Bachelor of Science in Information Technology</p>
          <p className="text-sm opacity-70">XYZ University — 2021 – 2025</p>
        </div>

        <div>
          <p className="font-semibold">Senior High School – ICT Strand</p>
          <p className="text-sm opacity-70">XYZ Senior High — 2019 – 2021</p>
        </div>
      </div>
    </div>
  );
}
